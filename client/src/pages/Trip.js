import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { Collection, CollectionItem } from "react-materialize";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Collections from "../components/Collections";
import Expenses from "./Expenses";
import Schedule from "./Schedule";

function Trip() {
  const [trip, setTrip] = useState({ members: [] });
  // const [friendUsername, setFriendUsername] = useState("");
  // const [friendData, setFriendData] = useState({});

  // When this component mounts, grab the trip with the _id of props.match.params.id
  // e.g. localhost:3000/trips/599dcb67f0f16317844583fc
  const { id } = useParams();

  useEffect(() => {
    API.getTrip(id)
      .then((res) => {
        setTrip(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(trip.startDate);
  const tripStart = new Date(trip.startDate);
  console.log(tripStart);

  console.log(tripStart - Date.now());

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

  return (
    <Container fluid>
      <Card>
        <Row>
          <Col size="m12 s12">
            <Jumbotron>
              <h1>{trip.tripName}</h1>
            </Jumbotron>
            <h3>
              {trip.startDate} to {trip.endDate}
            </h3>
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
            <Link to="/dashboard" className="btn-small  transparentBG link-btn">
              ← Back to Dashboard
            </Link>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Trip;
