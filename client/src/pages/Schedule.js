import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron"
import { List, ListItem } from "../components/List";
import { Table, TableHead, TableBody } from "../components/Table";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import schedule from "../utils/schedule.json";
import { DatePicker, TimePicker } from "react-materialize";

function Schedule() {

    const [sched, setSched] = useState({});
    const [trip, setTrip] = useState({});
    const { state } = useUserContext();
    const [formObject, setFormObject] = useState({})
    const sortedSchedule = schedule.sort((a, b) => b.activityDate - a.activityDate)

    const { id } = useParams();
    
    useEffect(() => {
        API.getTrip(id)
            .then(res => setTrip(res.data))
            .catch(err => console.log(err));
    }, [])

    function sortSched() {
        // schedule.sort(function (a, b) {
        //     return a.activityDate - b.activityDate
        // });
        console.log(sortedSchedule)
    }

    sortSched();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        console.log(state)
        event.preventDefault();
        if (formObject.activityName) {
            API.createSchedule(id, {
                activityName: formObject.activityName,
                activityDate: document.getElementById("activityDate").value,
                activitySubmitter: state.firstName,
                startTime: document.getElementById("startTime").value,
                endTime: document.getElementById("endTime").value
            })
            .then((res) => {
                console.log(res, "schedule test")
            }
            )
                // .then(res => findAllTrips())
                .catch(err => console.log(err));
        }
    };

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
                        <form>
                            <h3>
                                + Add an Activity
                                </h3>
                            <Input
                                onChange={handleInputChange}
                                name="activityName"
                                placeholder="What are you doing?"
                            />
                            <DatePicker
                                id="activityDate"
                                name="activityDate"
                                placeholder="Date"
                            />
                            <TimePicker
                                id="startTime"
                                name="startTime"
                                placeholder="Start Time"
                            />
                            <TimePicker
                                id="endTime"
                                name="endTime"
                                placeholder="End Time"
                            />
                            <TextArea
                                onChange={handleInputChange}
                                name="activityDescription"
                                placeholder="(Optional) Add any necessary details about the activity here"
                            />
                            <FormBtn
                                onClick={handleFormSubmit}
                            >Add</FormBtn>
                        </form>
                        {/* map using Expenses.members or something similar from a Expenses object*/}
                        {/* {trip.tripExpenses ? (
                                <List>
                                    {trip.tripExpense.map((expense) => (
                                        <Card>
                                        <ListItem>
                                            <p>{expense.expenseDescription} - {expense.expenseSubmitter}</p>
                                        </ListItem>
                                        </Card>
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
                    <Col size="m12">
                        <h1>Schedule</h1>
                        {/* map using schedule.days or something similar from a schedule object*/}
                        {/* {schedule.map((schedule, index))} */}
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