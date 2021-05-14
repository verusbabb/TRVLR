import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import AddBtn from "../components/AddBtn";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import SearchBar from "../components/SearchBar";
import SubmitButton from "../components/SubmitButton";

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [user, setUser] = useState([]);
  const { state } = useUserContext();
  const [friendUsername, setFriendUsername] = useState("");
  const [foundFriends, setFoundFriends] = useState([]);

  useEffect(() => {
    loadTrips();
  }, []);

  function loadTrips() {
    // API.getUser(state.id)
    //   .then((res) => {
    //     setUser(res.data);
    //     console.log(state, "user data");
    API.getTrips()
        .then((res) => {
            setTrips(res.data);
            console.log(res.data);
        })
      .catch((err) => console.log(err));
  }

  function removeTrip(id) {
    API.deleteTrip(id)
      .then(() => loadTrips())
      .catch((err) => console.log(err));
  }

  function handleInputChange(e) {
    const username = e.target.value;

    setFriendUsername(username);
  }

  function handleSubmit(e) {
    e.preventDefault();

    API.getUserByUsername(friendUsername)
      .then((res) => {
        setFoundFriends([...foundFriends, res.data]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container>
        <Card>
          <Jumbotron>
            <h1>
              Welcome {state?.firstName} {state?.lastName}!
            </h1>
          </Jumbotron>
        </Card>
        <Card>
          <Row>
            <Col size="m12">
              <h2>My Trips</h2>
              <Link to="/createtrip">+ Add a trip</Link>
              {trips.length ? (
                <List>
                  {trips.map((trip) => (
                    <Card key={trip._id}>
                      <Link to={"/trips/" + trip._id}>
                        <strong>{trip.tripName}</strong>
                      </Link>
                      <DeleteBtn onClick={() => removeTrip(trip._id)} />
                      <p>
                        Dates: {trip.startDate} to {trip.endDate}
                      </p>
                    </Card>
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
            <Col size="m12">
              <h2>My Friends</h2>
              <SearchBar onChange={handleInputChange} />
              <SubmitButton onClick={handleSubmit} />
              {foundFriends.length ? (
                <List>
                  {foundFriends.map((friend, index) => (
                    <ListItem key={index}>{friend.userName}</ListItem>
                  ))}
                </List>
              ) : (
                ""
              )}
            </Col>

            {/* <p>Coming soon!</p> */}
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default Dashboard;
