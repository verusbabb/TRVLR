import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
// import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron"
import { Table, TableHead, TableBody } from "../components/Table";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
// import schedule from "../utils/schedule.json";
import { DatePicker, TimePicker } from "react-materialize";
import moment from "moment";

function Schedule() {

    const [sched, setSched] = useState({});
    const [trip, setTrip] = useState({});
    const { state } = useUserContext();
    const [formObject, setFormObject] = useState({})

    const { id } = useParams();

    useEffect(() => {
        API.getTrip(id)
            .then(res => {
                setTrip(res.data);
                // setSched(res.data.tripSchedule);
                sortSched(res.data.tripSchedule);
            })
            .catch(err => console.log(err));
        // sortSched();
    }, [id])

    function sortSched(unsortedSchedule) {
        let sortedSchedule = unsortedSchedule.sort((a, b) => {
            return moment(a.activityDate + ", " + a.startTime).valueOf() - moment(b.activityDate + ", " + b.startTime).valueOf();
        });
        setSched(sortedSchedule);
    }

    // sortSched();

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
                    console.log(res, "schedule test");
                    setSched(res.data.tripSchedule);
                    sortSched(res.data.tripSchedule);
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
                                options={{
                                    container: "body"
                                }}
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
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m12">
                        <h1>Schedule</h1>
                        {/* map using schedule.days or something similar from a schedule object*/}
                        {/* {schedule.map((schedule, index))} */}
                        {sched.length ? (
                            <Table >
                                <TableHead>
                                    <th>Date</th>
                                    <th>Activity</th>
                                    <th>Time</th>
                                </TableHead>
                                <TableBody>
                                    {sched.map((schedule, index) => (
                                        <tr key={index}>
                                            <td>{schedule.activityDate}</td>
                                            <td>{schedule.activityName}</td>
                                            <td>{schedule.startTime}</td>
                                        </tr>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col size="m12">
                        <Link to={"/trips/" + id}>← Back to Trip</Link>
                    </Col>
                </Row>
                <Row>
                    <Col size="m12">
                        <Link to="/dashboard">← Back to Dashboard</Link>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Schedule