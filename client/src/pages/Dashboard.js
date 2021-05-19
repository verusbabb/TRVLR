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
import moment from "moment";
// import SearchBar from "../components/SearchBar";
// import SubmitButton from "../components/SubmitButton";

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [user, setUser] = useState([]);
  const { state } = useUserContext();
  const [friendUsername, setFriendUsername] = useState("");
  const [foundFriends, setFoundFriends] = useState([]);
  const [currentTrip, setCurrentTrip] = useState({});
  // const [schedule, setSchedule] = useState("");
  const [weather, setWeather] = useState({});
  const steveApiKey = "bfb8b19c29117879854c3946d13147c8";
  const koltonApiKey = "c6a936905a8566bfdc4cca37ff190c24";

  // const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    loadTrips();
    getWeather();
  }, []);

  function getWeather(location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&cnt=1&units=imperial&appid=${koltonApiKey}`
      )
      .then((res) => res.json())
      .then(weatherData => {
        console.log(weatherData);
        setWeather(weatherData);
      })
  }

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
            // sortSched(res.data.memberof[i].tripSchedule);
          } else {
            console.log("false");
          }
        }
      })
      .catch((err) => console.log(err));
  }

  // function sortSched(unsortedSchedule) {
  //   let sortedSchedule = unsortedSchedule.sort((a, b) => {
  //       return moment(a.activityDate + ", " + a.startTime).valueOf() - moment(b.activityDate + ", " + b.startTime).valueOf();
  //   });
  //   setSchedule(sortedSchedule);
  // }

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
        {JSON.stringify(weather) !== "{}" ? (
          <Card>
            <Row>
              <Col size="m12">
                <h3>Current Trip Forecast</h3>
                <h4>{currentTrip.tripName}</h4>

                <Table>
                  <TableHead>
                    <th>Temperature</th>
                    <th>Feels Like</th>
                    <th>Humidity</th>
                    <th>Description</th>
                    <th></th>
                  </TableHead>
                  <TableBody>
                    <tr>
                      <td>
                        {weather.main.temp}°F
                      </td>
                      <td>
                        {weather.main.feels_like}°F
                      </td>
                      <td>
                        {weather.main.humidity}%
                      </td>
                      <td>
                        {weather.weather[0].description}
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </Col>
            </Row>
          </Card>
        ) : (
          ""
        )}
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
      </Container>
    </>
  );
}

export default Dashboard;
