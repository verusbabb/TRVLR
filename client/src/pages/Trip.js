import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Trip() {

    const [trip, setTrip] = useState({})

    // When this component mounts, grab the trip with the _id of props.match.params.id
    // e.g. localhost:3000/trips/599dcb67f0f16317844583fc
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
                        <h3>{trip.startDate} to {trip.endDate}</h3>
                        <p>{trip.description}</p>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m10">
                        <article>
                            <h2>Trip Members</h2>
                        </article>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m10">
                        <article>
                            <h2>Collections</h2>
                            {/* {trip.collections.length ? (
                            <List>
                                {trip.collections.map(collection => (
                                    <ListItem key={collection.name}>
                                        <Link to={"/trips/" + trip._id}>
                                            <strong>
                                                {collection.name}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => removeTrip(trip._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )} */}
                        </article>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m6">
                        <Link to={"/trips/" + trip._id + "/schedule"}>Trip Schedule</Link>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m6">
                        <Link to={"/trips/" + trip._id + "/expenses"}>Trip Expenses</Link>
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
    );
}

export default Trip