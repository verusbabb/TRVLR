import React, { useState, useEffect } from "react";
import { useUserContext } from "../../utils/userContext";
import Card from "../Card";
import { Container, Row, Col } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import { Table, TableHead, TableBody } from "../Table";
import API from "../../utils/API";
import { Modal, Button } from "react-materialize";
import { Link, useParams } from "react-router-dom";

function Collections() {

    const [collection, setCollection] = useState({});
    const { state } = useUserContext();
    const [trip, setTrip] = useState({ members: [] });
    const [formObject, setFormObject] = useState({});

    const { id } = useParams();


    useEffect(() => {
        loadTrip();
    }, [id, collection]);

    function loadTrip() {
        API.getTrip(id)
            .then((res) => {
                setTrip(res.data);
                setCollection(res.data.tripCollections);
                // setCollection(trip.tripCollections);
                // console.log(trip.tripCollections, "expense test1");
                // setExpense()
            })
            .catch((err) => console.log(err));
    }

    //   function setExpense() {
    //     // console.log(trip, "expense test");
    //     setCollection(trip.tripCollections);
    //     // console.log(expenses, "expenses 2")
    //   }

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
                    setCollection(res.data.tripCollections);
                    // console.log(user, "user data");
                    // API.getTrips()
                    //     .then((res) => {
                    //         setTrips(res.data);
                    //         console.log(res.data);
                })
                .catch((err) => console.log(err));
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
            </Card>
        </>
    )
}

export default Collections