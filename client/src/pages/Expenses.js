import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";

function Expenses() {

    const [expense, setExpense] = useState({});
    const [trip, setTrip] = useState({});

    const { id } = useParams()
    useEffect(() => {
        API.getTrip(id)
            .then(res => setTrip(res.data))
            .catch(err => console.log(err));
    }, [])

    // console.log(trip.expenses.length)


    return (
        <>
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
                            <h1>Expenses</h1>
                            {/* map using Expenses.members or something similar from a Expenses object*/}
                            {/* {trip.expenses.length ? (

                                <List>
                                    {trip.expenses.map((expense) => (
                                        <ListItem>
                                            <p>Expense 1</p>
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <h3>No Results to Display</h3>

                            )} */}
                            {/* <ListItem> */}

                                {/* {trip.expenses[0].submitter} - {trip.expenses[0].name} - {trip.expenses[0].cost} */}
                            {/* </ListItem> */}
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
        </>
    )
}

export default Expenses