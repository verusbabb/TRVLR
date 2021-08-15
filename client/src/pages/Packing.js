import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import { Input } from "../components/Form";
import { Row, Col } from "../components/Grid";
import { Table, TableHead, TableBody } from "../components/Table";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { Modal, Button } from "react-materialize";
import DeleteButton from "../components/DeleteBtn";

function Packing() {
    const [packingList, setPackingList] = useState({});
    const [formObject, setFormObject] = useState({});
    const { state } = useUserContext();
    const { id } = useParams();

    useEffect(() => {
        loadTrip();
    }, [id])

    function loadTrip() {
        API.getTrip(id)
            .then((res) => {
                setPackingList(res.data.tripPacking);
            })
    }

    function removePackingItem(packingID) {
        API.deletePackingItem(packingID)
            .then((res) => {
                loadTrip();
            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.packingAmount) {
            API.createPackingItem(id, {
                packingDescription: formObject.packingDescription,
                packingAmount: formObject.packingAmount,
                packingSubmitter: state.id,
            })
                .then((res) => {
                    loadTrip();
                    handleFormClear();

                })
                .catch((err) => console.log(err));
        }
    };

    function handleFormClear() {

        document.getElementById("add-packing-list-form").reset();

        setFormObject({
            packingDescription: "",
            packingAmount: ""
        });
    };


    return (
        <div>
            <Card>
                <Row>
                    <Col size="m12 s12">
                        <h1>Packing List</h1>
                        <br></br>
                        <Modal
                            actions={[
                                <Button flat modal="close" node="button" waves="green">
                                    Close
                                </Button>,
                                <Button onClick={handleFormSubmit} className="modal-close roundedbtn">Add</Button>

                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Add a Packing Item"
                            id="Modal-0"
                            className="modal"
                            open={false}
                            options={{
                                autoclose: true,
                                container: "body",
                                dismissible: true,
                                endingTop: "10%",
                                inDuration: 250,
                                opacity: 0.5,
                                outDuration: 250,
                                preventScrolling: true,
                                startingTop: "4%",
                            }}
                            trigger={<Link node="button" className="btn-small roundedbtn white-text link-btn">+ Add a Packing Item</Link>}
                        >
                            <form id="add-packing-list-form">
                                <Input
                                    onChange={handleInputChange}
                                    name="packingDescription"
                                    placeholder="Brief description of the packing item"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    name="packingAmount"
                                    type="number"
                                    placeholder="Enter amount here"
                                />
                            </form>
                        </Modal>
                        {packingList.length ? (
                            <Table>
                                <TableHead>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                </TableHead>
                                <TableBody>
                                    {packingList.map((packingItem, index) => (
                                        <tr key={index}>
                                            <td>{packingItem.packingDescription}</td>
                                            <td>{packingItem.packingAmount}</td>
                                            <td><DeleteButton onClick={(() => removePackingItem(packingItem._id))} /></td>
                                        </tr>
                                    )
                                    )}
                                </TableBody>
                            </Table>
                        ) : ""}
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Packing
