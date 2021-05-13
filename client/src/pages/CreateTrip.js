import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
// import { findAllTrips } from "../../../controllers/tripsController";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import Jumbotron from "../components/Jumbotron";
import { DatePicker } from "react-materialize";

function CreateTrip() {
    const [trips, setTrips] = useState([]);
    const [formObject, setFormObject] = useState({});
    const [success, setSuccess] = useState(true);
    const [fail, setFail] = useState(true);
    const [state, dispatch] = useUserContext();
    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(state[0]);
        if (formObject.tripName) {
            API.saveTrip({
                id: state[0].id,
                tripName: formObject.tripName,
                startDate: document.getElementById("startDate").value,
                endDate: document.getElementById("endDate").value,
                description: formObject.description,
            })
                .then(async (res) => {
                    console.log(res);
                    dispatch({
                        type: "update",
                        memberOf: res.data.memberOf,
                    });

                    history.push("/dashboard");
                })
                // .then(res => findAllTrips())
                .catch((err) => {
                    setSuccess(false);
                    setFail(true);
                    console.log(err)
                });
        }
    }

    return (
        <>
            <Container>
                <Card>
                    <Jumbotron>
                        <h1>Create a New Trip</h1>
                    </Jumbotron>
                    <form>
                        <h3>Trip Name</h3>
                        <Input
                            onChange={handleInputChange}
                            name="tripName"
                            placeholder="Where are you going?"
                        />
                        <h3>Trip Dates</h3>
                        <DatePicker
                            id="startDate"
                            name="startDate"
                            placeholder="Start Date"
                        />

                        <DatePicker
                            id="endDate"
                            name="endDate"
                            placeholder="End Date"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="description"
                            placeholder="(Optional) What kind of trip is this, what are your hopes and dreams? Are you looking to accomplish anything specific?"
                        />
                        <FormBtn disabled={!formObject.tripName} onClick={handleFormSubmit}>
                            Create
            </FormBtn>
                        {!success && <div> Whoops! Please try again.</div>}
                        {!fail && <div> Success! Your trip was created.</div>}
                    </form>
                </Card>
            </Container>
        </>
    );
}

export default CreateTrip;
