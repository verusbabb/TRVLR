import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import { Row, Col } from "../components/Grid";
import { Input, TextArea } from "../components/Form";
import { Table, TableHead, TableBody } from "../components/Table";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { Modal, Button, DatePicker, TimePicker } from "react-materialize";
import moment from "moment";
import DeleteButton from "../components/DeleteBtn";

function Schedule() {

    const [sched, setSched] = useState({});
    const { state } = useUserContext();
    const [formObject, setFormObject] = useState({});

    const { id } = useParams();

    useEffect(() => {
        loadTrip();
    }, [id])

    function loadTrip() {
        API.getTrip(id)
            .then(res => {
                sortSched(res.data.tripSchedule);
            })
            .catch(err => console.log(err));
    }

    function sortSched(unsortedSchedule) {
        let sortedSchedule = unsortedSchedule.sort((a, b) => {
            return moment(a.activityDate + ", " + a.startTime).valueOf() - moment(b.activityDate + ", " + b.startTime).valueOf();
        });
        setSched(sortedSchedule);
    }

    function removeSchedule(scheduleId) {
        API.deleteSchedule(scheduleId)
            .then((res) => {
                loadTrip();
            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (formObject.activityName) {
            API.createSchedule(id, {
                activityName: formObject.activityName,
                activityDate: document.getElementById("activityDate").value,
                activitySubmitter: state.firstName,
                startTime: document.getElementById("startTime").value,
                endTime: document.getElementById("endTime").value,
                activityDescription: formObject.activityDescription
            })
                .then((res) => {
                    loadTrip();
                    handleFormClear();
                }
                )
                // .then(res => findAllTrips())
                .catch(err => console.log(err));
        }
    };

    function handleFormClear() {

        document.getElementById("addScheduleForm").reset();

        setFormObject({
            activityName: "",
            activityDescription: ""
        });
    };

    return (
        <>
            <Card>
                <Row>
                    <Col size="m12 s12">
                        <h1>Schedule</h1>
                        <br></br>
                        <Modal
                            actions={[
                                <Button flat modal="close" node="button" waves="green">
                                    Close
                                </Button>,
                                <Button
                                    onClick={handleFormSubmit}
                                    className="modal-close"
                                >Add</Button>
                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Add an Activity"
                            id="add-activity-modal"
                            className="modal"
                            open={false}
                            options={{
                                autoclose: true,
                                container: "body",
                                dismissible: true,
                                endingTop: "10%",
                                inDuration: 250,
                                opacity: 0.5,
                                outDuration: 250,
                                preventScrolling: true,
                                startingTop: "4%",
                            }}
                            trigger={<Link node="button" className="btn-small transparentBG link-btn">+ Add an Activity</Link>}
                        >
                            <form id="addScheduleForm">
                                <Input
                                    onChange={handleInputChange}
                                    name="activityName"
                                    value={formObject.activityName}
                                    placeholder="What are you doing?"
                                />
                                <DatePicker
                                    id="activityDate"
                                    name="activityDate"
                                    value={formObject.activityDate}
                                    placeholder="Date"
                                    options={{
                                        container: "body",
                                        autoClose: true
                                    }}
                                />
                                <TimePicker
                                    id="startTime"
                                    name="startTime"
                                    value={formObject.startTime}
                                    placeholder="Start Time"
                                    options={{
                                        container: "body",
                                        autoClose: true
                                    }}
                                />
                                <TimePicker
                                    id="endTime"
                                    name="endTime"
                                    value={formObject.endTime}
                                    placeholder="End Time"
                                    options={{
                                        container: "body",
                                        autoClose: true
                                    }}
                                />
                                <TextArea
                                    onChange={handleInputChange}
                                    name="activityDescription"
                                    value={formObject.activityDescription}
                                    placeholder="(Optional) Add any necessary details about the activity here"
                                />

                            </form>
                        </Modal>
                        <br/><br/>
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
                                            <td><DeleteButton onClick={(() => removeSchedule(schedule._id))} /></td>
                                        </tr>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <p>Nothing scheduled yet!</p>
                        )}
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Schedule