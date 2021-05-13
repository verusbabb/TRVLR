import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";

function Expenses() {

    const [expense, setExpense] = useState({});
    const [trip, setTrip] = useState({});
    const [formObject, setFormObject] = useState({})
    const {state} = useUserContext();

    const { id } = useParams()

    // useEffect(() => {
    //     API.getTrip(id)
    //         .then(res => setTrip(res.data))
    //         .catch(err => console.log(err));
    // }, [])

    useEffect(() => {
        loadTrip();
    }, []);

    function loadTrip() {
        API.getTrip(id)
            .then((res) => setTrip(res.data))
            .catch((err) => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        console.log(state)
        event.preventDefault();
        if (formObject.expenseAmount) {
            API.createExpense(id, {
                expenseDescription: formObject.expenseDescription,
                expenseAmount: formObject.expenseAmount,
                expenseSubmitter: state.firstName,
                expenseDate: formObject.expenseDate
            })
                // .then(res => findAllTrips())
                .catch(err => console.log(err));
        }
    };

    // console.log(trip)
    // console.log(trip.expenses[0].description)
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
                            <form>
                                <h3>
                                    + Add an Expense
                                </h3>
                                <Input
                                    onChange={handleInputChange}
                                    name="expenseDescription"
                                    placeholder="Brief description of the expense"
                                />
                                <Input 
                                    onChange={handleInputChange}
                                    name="expenseAmount"
                                    placeholder="Enter dollar amount here"
                                />
                                <Input 
                                    onChange={handleInputChange}
                                    name="expenseDate"
                                    placeholder="When did you make the purchase?"
                                />
                                <FormBtn
                                    onClick={handleFormSubmit}
                                >Add</FormBtn>
                            </form>
                            {/* map using Expenses.members or something similar from a Expenses object*/}
                            {/* {expense ? (
                                <List>
                                    {expense.map((expense) => (
                                        <ListItem>
                                            <p>{expense.description} - {expense.submitter}</p>
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <h3>No Results to Display</h3>
                            )} */}
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