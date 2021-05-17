import React, { useState, useEffect } from "react";
import { useUserContext } from "../../utils/userContext";
import Card from "../Card";
import { Container, Row, Col } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import { Table, TableHead, TableBody } from "../Table";
import API from "../../utils/API";
import { Modal, Button, Collapsible, CollapsibleItem } from "react-materialize";
import { Link, useParams } from "react-router-dom";


function Collections() {

    const [collection, setCollection] = useState({});
    const [trip, setTrip] = useState();
    const [formObject, setFormObject] = useState({});
    const { state } = useUserContext();

    const { id } = useParams();

    useEffect(() => {
        loadTrip();
    }, [id]);

    function loadTrip() {
        API.getTrip(id)
            .then((res) => {
                setTrip(res.data);
                setCollection(res.data.tripCollections);
            })
            .catch((err) => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        console.log(state);
        event.preventDefault();
        if (formObject.collectionName) {
            API.createCollection(id, {
                collectionName: formObject.collectionName,
                collectionDescription: formObject.collectionDescription,
                // collectionSubmitter: state.firstName,
                // collectionUrl: formObject.collectionUrl
            })
                .then((res) => {
                    console.log(res);
                    // setCollection(res.data.tripCollections);
                    loadTrip();
                    // console.log(user, "user data");
                    // API.getTrips()
                    //     .then((res) => {
                    //         setTrips(res.data);
                    //         console.log(res.data);
                })
                .catch((err) => console.log(err));
        }
    }

    const handleItemEntry = (collectionId) => {
        // event.preventDefault();
        if (formObject.itemName) {
            console.log(formObject, collectionId)
            API.createCollectionItem(collectionId, {
                itemName: formObject.itemName,
                itemUrl: formObject.itemUrl,
                itemDescription: formObject.itemDescription,
                itemSubmitter: state.firstName
            }
            )
                .then((res) => {
                    loadTrip();
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <>
            <Card>
                <Row>
                    <Col size="m12">
                        <h1>Collections</h1>
                        <br></br>
                        <Modal
                            actions={[
                                <Button flat modal="close" node="button" waves="green">Close</Button>
                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Add a Collection"
                            id="Modal-0"
                            open={false}
                            options={{
                                // container: "body",
                                dismissible: true,
                                endingTop: '10%',
                                inDuration: 250,
                                opacity: 0.5,
                                outDuration: 250,
                                preventScrolling: true,
                                startingTop: '4%'
                            }}
                            trigger={<Link node="button">+ Add a Collection</Link>}
                        >
                            <form>

                                <Input
                                    onChange={handleInputChange}
                                    name="collectionName"
                                    placeholder="Name of the Collection"
                                />
                                <TextArea
                                    onChange={handleInputChange}
                                    name="collectionDescription"
                                    placeholder="(Optional) Add any necessary details here"
                                />
                                <FormBtn onClick={handleFormSubmit}>Add</FormBtn>
                            </form>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col size="m12">
                        {collection.length ? (
                            <Collapsible accordion={false}>
                                {collection.map((collect, index) => (
                                    <CollapsibleItem
                                        key={index}
                                        expanded={false}
                                        header={collect.collectionName}
                                        // icon={<Icon>filter_drama</Icon>}
                                        node="div"
                                    >
                                        {collect.collectionDescription}
                                        <br></br>
                                        <br></br>
                                        <Modal
                                            actions={[
                                                <Button flat modal="close" node="button" waves="green">Close</Button>
                                            ]}
                                            bottomSheet={false}
                                            fixedFooter={false}
                                            header="Add an Item"
                                            id="collectionItem"
                                            className="modal"
                                            open={false}
                                            options={{
                                                container: "body",
                                                dismissible: true,
                                                endingTop: '10%',
                                                inDuration: 250,
                                                opacity: 0.5,
                                                outDuration: 250,
                                                preventScrolling: true,
                                                startingTop: '4%'
                                            }}
                                            trigger={<Link node="button">+ Add an Item to this Collection</Link>}
                                        >
                                            {/* <form> */}
                                            <Input
                                                onChange={handleInputChange}
                                                name="itemName"
                                                value={formObject.itemName}
                                                placeholder="Item Name"
                                            />
                                            <Input
                                                onChange={handleInputChange}
                                                name="itemUrl"
                                                value={formObject.itemUrl}
                                                placeholder="(Optional) Enter a link"
                                            />
                                            <TextArea
                                                onChange={handleInputChange}
                                                name="itemDescription"
                                                value={formObject.itemDescription}
                                                placeholder="(Optional) Add a description"
                                            >
                                            </TextArea>
                                            <FormBtn onClick={() => handleItemEntry(collect._id)}>Add</FormBtn>
                                            {/* </form> */}
                                        </Modal>
                                        
                                        {collect.collectionItems.length ? (
                                            <Table>
                                                <TableHead>
                                                    <th>{collect.collectionName}</th>
                                                    <th>Url</th>
                                                    <th>Suggested By</th>
                                                </TableHead>
                                                <TableBody>
                                                    {collect.collectionItems.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.itemName}</td>
                                                            <td>{item.itemUrl}</td>
                                                            <td>{item.itemSubmitter}</td>
                                                        </tr>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        ) : (
                                            <p>No Results to Display</p>
                                        )}
                                    </CollapsibleItem>
                                ))}
                            </Collapsible>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Collections