import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import { Container } from "../components/Grid";
import { Input, TextArea } from "../components/Form";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import Jumbotron from "../components/Jumbotron";
import { Button, DatePicker } from "react-materialize";

function CreateTrip() {
    const [formObject, setFormObject] = useState({});
    const [success, setSuccess] = useState(true);
    const [fail, setFail] = useState(true);
    const { state, dispatch } = useUserContext();
    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const randomID = () => {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.tripName) {
            API.saveTrip({
                id: state.id,
                tripId: randomID(),
                tripName: formObject.tripName,
                tripCity: formObject.tripCity,
                startDate: document.getElementById("startDate").value,
                endDate: document.getElementById("endDate").value,
                description: formObject.description,
                members: [state.id]
            })
                .then(async (res) => {
                    dispatch({
                        type: "update",
                        memberOf: res.data.memberOf,
                    });

                    history.push("/dashboard");
                })
                .catch((err) => {
                    setSuccess(false);
                    setFail(true);
                    console.log(err)
                });
        }
    }

    function handleIdSubmit(event) {
        event.preventDefault();
        if (formObject.tripId) {
            API.findTripByTripId(
                {
                    tripId: formObject.tripId
                }
            )
                .then((res) => {
                    API.updateTrip(
                        res.data._id,
                        {
                            members: [...res.data.members, state.id]
                        }
                    )
                        .then(async (res) => {
                            dispatch({
                                type: "update",
                                memberOf: res.data.memberOf,
                            });

                            history.push("/dashboard");
                        })
                        .catch((err) => {
                            setSuccess(false);
                            setFail(true);
                            console.log(err);
                        });
                })
                .catch((err) => {
                    setSuccess(false);
                    setFail(true);
                    console.log(err);
                })
        }
    }

    return (
        <>
            <Container>
                <Card>
                    <Jumbotron>
                        <h1>Find An Existing Trip</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="tripId"
                            placeholder="Insert 9 Character ID Here"
                        />
                        <Button disabled={!formObject.tripId} onClick={handleIdSubmit} className="roundedbtn btn-small white-text bigger-text">
                            Add
                        </Button>
                    </form>
                </Card>
                <Card>
                    <Jumbotron>
                        <h1>Create a New Trip</h1>
                    </Jumbotron>
                    <form>
                        <h3>Trip Name</h3>
                        <Input
                            onChange={handleInputChange}
                            name="tripName"
                            placeholder="Give your trip a name!"
                        />
                        <h3>City</h3>
                        <span>Enter a city name to get live weather data while on your trip!</span>
                        <Input
                            onChange={handleInputChange}
                            name="tripCity"
                            placeholder="City Name"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="tripState"
                            placeholder="State and/or country"
                        />
                        <h3>Trip Dates</h3>
                        <DatePicker
                            id="startDate"
                            name="startDate"
                            placeholder="Start Date"
                            options={{
                                container: "body",
                                autoClose: true
                            }}
                        />
                        <DatePicker
                            id="endDate"
                            name="endDate"
                            placeholder="End Date"
                            options={{
                                container: "body",
                                autoClose: true
                            }}
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="description"
                            placeholder="(Optional) What kind of trip is this, what are your hopes and dreams? Are you looking to accomplish anything specific?"
                        />
                        <Button disabled={!formObject.tripName} onClick={handleFormSubmit} className="roundedbtn btn-small white-text bigger-text">
                            Create
            </Button>
                        {!success && <div> Whoops! Please try again.</div>}
                        {!fail && <div> Success! Your trip was created.</div>}
                    </form>
                </Card>
            </Container>
        </>
    );
}

export default CreateTrip;
