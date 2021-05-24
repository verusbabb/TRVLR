import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea } from "../components/Form";
import { Modal, Button, DatePicker } from "react-materialize";

import Card from "../components/Card";
import { Collection, CollectionItem } from "react-materialize";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Collections from "../components/Collections";
import Expenses from "./Expenses";
import Schedule from "./Schedule";


function Trip() {
    const [trip, setTrip] = useState({ members: [] });
    const [formObject, setFormObject] = useState({

    });
    const [success, setSuccess] = useState(true);
    const [fail, setFail] = useState(true);
    // const [friendUsername, setFriendUsername] = useState("");
    // const [friendData, setFriendData] = useState({});

    // When this component mounts, grab the trip with the _id of props.match.params.id
    // e.g. localhost:3000/trips/599dcb67f0f16317844583fc
    const { id } = useParams();

    useEffect(() => {
        loadTrip()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function loadTrip() {
        API.getTrip(id)
            .then((res) => {
                setTrip(res.data);
            })
            .catch((err) => console.log(err));
    }


    // function handleInputChange(e) {
    //     const username = e.target.value;

    //     setFriendUsername(username);
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     API.getUserByUsername(friendUsername)
    //         .then((res) => {
    //             setFriendData(res.data);

    //             if (trip.members.some((e) => e.userName === friendUsername)) {
    //                 return;
    //             }
    //             console.log(friendData);
    //             API.updateTrip(id, {
    //                 members: [
    //                     ...trip.members,
    //                     {
    //                         userName: friendData.userName,
    //                         name: {
    //                             firstName: friendData.name.firstName,
    //                             lastName: friendData.name.lastName,
    //                         },
    //                     },
    //                 ],
    //             })
    //                 .then((res) => setTrip(res.data))
    //                 .catch((err) => console.log(err));
    //         })
    //         .catch((err) => console.log(err));
    // }

    function editTrip() {
        console.log(trip._id, {
            tripName: formObject.tripName,
            tripCity: formObject.tripCity,
            startDate: document.getElementById("startDate").value,
            endDate: document.getElementById("endDate").value,
            description: formObject.description,
        }, "id test")
        API.editTrip(trip._id, {
            tripName: formObject.tripName,
            tripCity: formObject.tripCity,
            startDate: document.getElementById("startDate").value,
            endDate: document.getElementById("endDate").value,
            description: formObject.description,
        })
            .then((res) => {
                loadTrip();
            })
            .catch((err) => console.log(err));
    }

    function handleEditInput(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    return (
        <Container fluid>
            <Card>
                <Row>
                    <Col size="m12 s12">
                        {/* <Jumbotron> */}
                        <h3 className="float-left">{trip.tripName}   </h3>
                        {/* </Jumbotron> */}
                    </Col>
                </Row>
                <Row>
                    <Col size="m6 offset-m3">
                        <p>
                            {trip.startDate} to {trip.endDate}
                        </p>
                    </Col>
                    <Col size="m3">
                        <Modal
                            actions={[
                                <Button flat modal="close" node="button" waves="green">
                                    Cancel
                </Button>,
                                <Button className="modal-close roundedbtn" onClick={() => editTrip(trip._id)}>Save Trip</Button>
                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Edit Trip"
                            id="Modal-0"
                            open={false}
                            options={{
                                // container: "body",
                                dismissible: true,
                                endingTop: "10%",
                                inDuration: 250,
                                opacity: 0.5,
                                outDuration: 250,
                                preventScrolling: true,
                                startingTop: "4%",
                            }}
                            trigger={
                                <div className="edit-btn" role="button">
                                    <i className="material-icons">edit</i>
                                </div>
                            }
                        >
                            <form>
                                <h5>Trip Name</h5>
                                <Input
                                    onChange={handleEditInput}
                                    name="tripName"
                                    value={formObject.tripName ? formObject.tripName : trip.tripName}
                                    placeholder="Give your trip a name!"

                                />
                                <h5>City</h5>
                                <span>Enter a city name to get live weather data while on your trip!</span>
                                <Input
                                    onChange={handleEditInput}
                                    name="tripCity"
                                    value={formObject.tripCity ? formObject.tripCity : trip.tripCity}
                                    placeholder="City Name"

                                />
                                <Input
                                    onChange={handleEditInput}
                                    name="tripState"
                                    value={formObject.tripState ? formObject.tripState : trip.tripState}
                                    placeholder="State and/or country"

                                />
                                <h5>Trip Dates</h5>
                                <DatePicker
                                    id="startDate"
                                    name="startDate"
                                    value={formObject.startDate ? formObject.startDate : trip.startDate}
                                    placeholder="Start Date"

                                    options={{
                                        container: "body",
                                        autoClose: true
                                    }}
                                />
                                <DatePicker
                                    id="endDate"
                                    name="endDate"
                                    value={formObject.endDate ? formObject.endDate : trip.endDate}
                                    placeholder="End Date"

                                    options={{
                                        container: "body",
                                        autoClose: true
                                    }}
                                />
                                <TextArea
                                    onChange={handleEditInput}
                                    name="description"
                                    value={formObject.description ? formObject.description : trip.description}
                                    placeholder="(Optional) What kind of trip is this, what are your hopes and dreams? Are you looking to accomplish anything specific?"

                                />
                                {!success && <div> Whoops! Please try again.</div>}
                                {!fail && <div> Success! Your trip was created.</div>}
                            </form>
                        </Modal>
                    </Col>

                </Row>
                <Row>
                    <Col size="m12">
                        <p>{trip.description}</p>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m12 s12">
                        <article>
                            <h2>Trip Members</h2>
                            <br></br>
                            {trip.members.length ? (
                                <Collection>
                                    {trip.members.map((friend, index) => (

                                        <CollectionItem key={index}>

                                            {friend.name.firstName + " " + friend.name.lastName}
                                            <br />
                                            <span>Username: {friend.userName}</span>
                                        </CollectionItem>
                                    ))}
                                </Collection>
                            ) : (
                                ""
                            )}
                            <br></br>
                            <h5>Send your friends this unique Trip ID to join:</h5>
                            <h4>{trip.tripId}</h4>
                            {/* <br></br>
                                <h5>OR</h5>
                                <SearchBar onChange={handleInputChange} />
                                <SubmitButton onClick={handleSubmit} /> */}
                        </article>
                    </Col>
                </Row>
            </Card>
            {/* Other trip components referenced here */}
            <Collections />
            <Schedule />
            <Expenses />
            <Card>
                <Row>
                    <Col size="m12 s12">
                        <Link to="/dashboard" className="btn-small roundedbtn white-text link-btn">← Back to Dashboard</Link>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default Trip;
