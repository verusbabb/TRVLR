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
  const [currentTrip, setCurrentTrip] = useState({});
  const [weather, setWeather] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/daily?q=Denver&units=imperial&appid=f21ee75183114c7c096d92749641d1f4`;

  useEffect(() => {
    loadTrips();
    getWeather();
  }, []);

  async function getWeather(location) {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Cozumel&cnt=1&appid=bfb8b19c29117879854c3946d13147c8`
      );

      if (result.status === 200) {
        console.log(result);
        return { success: true, data: await result.json() };
      }

      return { success: false, error: result.statusText };
    } catch (ex) {
      return { success: false, error: ex.message };
    }
  }
  console.log(weather);

  function loadTrips() {
    API.getUser(state.id)
      .then((res) => {
        setUser(res.data);
        console.log(user);

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
      })
      .catch((err) => console.log(err));
  }

  // console.log(currentTrip);

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
        {JSON.stringify(currentTrip) !== "{}" ? (
          <Card>
            <Row>
              <Col size="m12">
                <h3>Current Trip Schedule</h3>
                <h4>{currentTrip.tripName}</h4>

                <Table>
                  <TableHead>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Time</th>
                  </TableHead>
                  <TableBody>
                    {currentTrip.tripSchedule.map((schedule, index) => (
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

        {/* {JSON.stringify(currentTrip) !== "{}" ? (
          <Card>
            <Row>
              <Col size="m12">
                <h3>Current Trip Forecast</h3>
                <h4>{currentTrip.tripName}</h4>

                <Table>
                  <TableHead>
                    <th>temp</th>
                  </TableHead>
                  <TableBody>
                    {weather.list.map((list, index) => (
                      <tr key={index}>
                        <td>{list.main.temp}</td>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </Col>
            </Row>
          </Card>
        ) : (
          ""
        )} */}
      </Container>
    </>
  );
}

export default Dashboard;
