import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { List } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { Table, TableHead, TableBody } from "../components/Table";
import { Modal, Button } from "react-materialize";

function Dashboard() {
  const [user, setUser] = useState([]);
  const { state } = useUserContext();
  const [currentTrip, setCurrentTrip] = useState({});
  const [weather, setWeather] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    loadTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getWeather(location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&cnt=1&units=imperial&appid=${apiKey}`
      )
      .then((res) => res.json())
      .then(weatherData => {
        if(weatherData.message === "city not found") {
          return;
        }
        setWeather(weatherData);
      })
      .catch(err => console.log(err));
  }

  function loadTrips() {
    API.getUser(state.id)
      .then((res) => {
        setUser(res.data);

        for (let i = 0; i < res.data.memberOf.length; i++) {
          let startDate = res.data.memberOf[i].startDate;
          let endDate = res.data.memberOf[i].endDate;
          let tripStart = Date.parse(startDate);
          let tripEnd = Date.parse(endDate);
          if (tripStart <= Date.now() && tripEnd >= Date.now()) {
            setCurrentTrip(res.data.memberOf[i]);
            getWeather(res.data.memberOf[i].tripCity);
          }
        }
      })
      .catch((err) => console.log(err));
  }

  function removeTrip(id) {
    API.deleteTrip(id)
      .then(() => loadTrips())
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
        {JSON.stringify(currentTrip) !== "{}" ? (
        <Card>
        {JSON.stringify(weather) !== "{}" ? (
          // <Card>
            <Row>
              <Col size="m12">
                <h5>It looks like you're currently on a trip to {currentTrip.tripCity}!</h5>
                <br></br>
                <Link to={"/trips/" + currentTrip._id} className="btn-small transparentBG link-btn">View / Add Trip Details</Link>

                <h4>Current weather in {currentTrip.tripCity}:</h4>
                <Card>
                  <Row>
                    <Col size="m4 s12">
                      <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather status icon"></img>
                      <p>{weather.weather[0].description}</p>
                    </Col>
                    <Col size="m8 s12">
                      <br></br>
                      <p>Temperature: {weather.main.temp.toFixed(0)}°F</p>
                      <p>Feels Like: {weather.main.feels_like.toFixed(0)}°F</p>
                      <p>Humidity: {weather.main.humidity}%</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          // </Card>
        ) : (
          <p>No weather data found for your city input. :(</p>
          )}
        {currentTrip.tripSchedule.length ? (
          // <Card>
            <Row>
              <Col size="m12">
                <h4>{currentTrip.tripName} Schedule:</h4>
                {/* <Link to={"/trips/" + currentTrip._id}>Go to Dashboard to add an activity</Link> */}

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
          // </Card>
        ) : (
          <p>Add something to your trip schedule to see it here!</p>
          )}
          </Card>
        ) : (
          ""
        )}
        <Card>
          <Row>
            <Col size="m12 s12">
              <h2>My Trips</h2>
              <Link to="/createtrip" className="btn-small transparentBG link-btn">+ Add a trip</Link>
              {user.memberOf ? (
                <List>
                  {user.memberOf.map((trip, index) => (
                    <Card key={index}>
                      <Link to={"/trips/" + trip._id}>
                        <h4 className="trip-name">{trip.tripName}</h4>
                      
                      <p>
                        {trip.startDate} to {trip.endDate}
                      </p>
                      <p>Trip ID: {trip.tripId}</p>
                      <br></br>
                      </Link>
                      {/* <a onClick={() => removeTrip(trip._id)} className="btn-flat white-text red">Delete trip</a> */}
                      <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Cancel
                </Button>,
                <Button className="modal-close delete-confirm" onClick={() => removeTrip(trip._id)}>Delete Trip</Button>
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Are you sure? This will delete all trip data for all trip members!"
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
              trigger={<DeleteBtn />}
            ></Modal>

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
