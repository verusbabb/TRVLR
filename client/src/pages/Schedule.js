import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";

function Schedule() {

    const [sched, setSched] = useState({});
    const [trip, setTrip] = useState({});

    const { id } = useParams()
    useEffect(() => {
        API.getTrip(id)
            .then(res => setTrip(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid>

            <Card>
                <Row>
                    <Col size="m12">
                        <Jumbotron>
                        <h1>
                            {trip.tripName}
                        </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m12">
                        <h1>Schedule</h1>
                        {/* map using schedule.days or something similar from a schedule object*/}
                            <h2>Day 1 - Thursday</h2>
                            <List>
                                <ListItem>
                                    8:00am - Leave for Trip
                                </ListItem>
                                <ListItem>
                                    12:00pm - Lunch
                                </ListItem>
                            </List>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m6">
                        <Link to="/dashboard">← Back to Dashboard</Link>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Schedule