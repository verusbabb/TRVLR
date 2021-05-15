import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import { List, ListItem } from "../components/List";
import { Table, TableHead, TableBody} from "../components/Table";
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
                            <Table >
                                <TableHead>
                                    <th>Time</th>
                                    <th>Activity</th>
                                </TableHead>
                                <TableBody>
                                    <tr>
                                        <td>8:00 am</td>
                                        <td>Leave for Trip</td>
                                    </tr>
                                    <tr>
                                        <td>12:00 pm - 1:00 pm</td>
                                        <td>Lunch</td>
                                    </tr>
                                </TableBody>
                            </Table>
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