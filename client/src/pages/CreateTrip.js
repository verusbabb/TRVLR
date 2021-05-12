import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { findAllTrips } from "../../../controllers/tripsController";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import Jumbotron from "../components/Jumbotron";

function CreateTrip() {
  const [trips, setTrips] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [state, dispatch] = useUserContext();

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
        startDate: formObject.startDate,
        endDate: formObject.endDate,
        description: formObject.description,
      })
        .then(async (res) => {
          console.log(res);
          dispatch({
            type: "update",
            memberOf: res.data.memberOf,
          });
        })
        // .then(res => findAllTrips())
        .catch((err) => console.log(err));
    }
  }
  console.log(state.memberOf);
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
            <Input
              onChange={handleInputChange}
              name="startDate"
              placeholder="Start Date"
            />
            <Input
              onChange={handleInputChange}
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
          </form>
        </Card>
      </Container>
    </>
  );
}

export default CreateTrip;
