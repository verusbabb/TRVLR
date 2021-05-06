import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [state] = useUserContext();

  useEffect(() => {
    loadTrips();
  }, []);

  function loadTrips() {
    API.getTrips()
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));
  }

  function removeTrip(id) {
    API.removeTrip(id)
      .then((res) => loadTrips())
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* <Container> */}
      <Card>
        <h1>
          Test: My userName is {state[0].userName}, my first name is{" "}
          {state[0].firstName}, my last name is {state[0].lastName}!
        </h1>
      </Card>
      <Card>
        <Row>
          <Col size="m12">
            <h2>My Trips</h2>
            {trips.length ? (
              <List>
                {trips.map((trip) => (
                  <ListItem key={trip._id}>
                    <Link to={"/trips/" + trip._id}>
                      <strong>{trip.tripName}</strong>
                    </Link>
                    <DeleteBtn onClick={() => removeTrip(trip._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <h2>Friends</h2>
        </Row>
      </Card>
      {/* </Container> */}
    </>
  );
}

export default Dashboard;
