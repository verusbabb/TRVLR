import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
// import AddBtn from "../components/AddBtn";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { Table, TableHead, TableBody } from "../components/Table";
// import SearchBar from "../components/SearchBar";
// import SubmitButton from "../components/SubmitButton";

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [user, setUser] = useState([]);
  const { state } = useUserContext();
  const [friendUsername, setFriendUsername] = useState("");
  const [foundFriends, setFoundFriends] = useState([]);
  const [currentTrip, setCurrentTrip] = useState([]);

  useEffect(() => {
    loadTrips();
  }, []);

  function loadTrips() {
    API.getUser(state.id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        console.log(user, "user data");
        console.log(typeof Date.now());
        console.log(res.data.memberOf.length);

        for (let i = 0; i < res.data.memberOf.length; i++) {
          let startDate = res.data.memberOf[i].startDate;
          let endDate = res.data.memberOf[i].endDate;
          let tripStart = Date.parse(startDate);
          let tripEnd = Date.parse(endDate);

          if (tripStart <= Date.now() && tripEnd >= Date.now()) {
            console.log("true");
            setCurrentTrip(res.data.memberOf[i]);
          } else {
            console.log("false");
          }
        }
        // API.getTrips()
        //     .then((res) => {
        //         setTrips(res.data);
        //         console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  console.log(currentTrip);

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
            <Col size="m12 s12">
              <h2>My Trips</h2>
              <Link to="/createtrip">+ Add a trip</Link>
              {user.memberOf ? (
                <List>
                  {user.memberOf.map((trip, index) => (
                    <Card key={index}>
                      <Link to={"/trips/" + trip._id}>
                        <strong>{trip.tripName}</strong>
                      </Link>
                      <DeleteBtn onClick={() => removeTrip(trip._id)} />
                      <p>
                        Dates: {trip.startDate} to {trip.endDate}
                      </p>
                      <p>Trip ID: {trip.tripId}</p>
                    </Card>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Card>

        {currentTrip.length ? (
          <Card>
            <Row>
              <Col size="m12">
                <h1>{currentTrip.</h1>
                {/* map using schedule.days or something similar from a schedule object*/}
                {/* {schedule.map((schedule, index))} */}
                <Table>
                  <TableHead>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Time</th>
                  </TableHead>
                  <TableBody>
                    {currentTrip.map((schedule, index) => (
                      <tr key={index}>
                        <td>{schedule.activityDate}</td>
                        <td>{schedule.activityName}</td>
                        <td>{schedule.startTime}</td>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </Col>
            </Row>
          </Card>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default Dashboard;
