import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import { Input } from "../components/Form";
import { Row, Col } from "../components/Grid";
import { Table, TableHead, TableBody } from "../components/Table";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { Modal, Button, DatePicker } from "react-materialize";
import DeleteButton from "../components/DeleteBtn";

function Expenses() {
    const [tripExpense, setTripExpense] = useState({});
    const [formObject, setFormObject] = useState({});
    const { state } = useUserContext();

    const { id } = useParams();

    useEffect(() => {
        loadTrip();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    function loadTrip() {
        API.getTrip(id)
            .then((res) => {
                setTripExpense(res.data.tripExpenses);
            })
            .catch((err) => console.log(err));
    }

    function removeExpense(expenseId) {
        API.deleteExpense(expenseId)
            .then((res) => {
                loadTrip();
            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.expenseAmount) {
            API.createExpense(id, {
                expenseDescription: formObject.expenseDescription,
                expenseAmount: formObject.expenseAmount,
                expenseSubmitter: state.firstName,
                expenseDate: document.getElementById("expenseDate").value,
            })
                .then((res) => {
                    loadTrip();
                    handleFormClear();

                })
                .catch((err) => console.log(err));
        }
    };

    function handleFormClear() {

        document.getElementById("add-expense-form").reset();

        setFormObject({
            expenseDescription: "",
            expenseAmount: ""
        });
    };

    return (
        <>
            <Card>
                <Row>
                    <Col size="m12 s12">
                        <h1>Expenses</h1>
                        <br></br>
                        <Modal
                            actions={[
                                <Button flat modal="close" node="button" waves="green">
                                    Close
                                </Button>,
                                <Button onClick={handleFormSubmit} className="modal-close roundedbtn">Add</Button>

                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Add an Expense"
                            id="Modal-0"
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
                            trigger={<Link node="button" className="btn-small roundedbtn white-text link-btn">+ Add an Expense</Link>}
                        >
                            <form id="add-expense-form">
                                <Input
                                    onChange={handleInputChange}
                                    name="expenseDescription"
                                    placeholder="Brief description of the expense"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    name="expenseAmount"
                                    type="number"
                                    placeholder="Enter dollar amount here"
                                />
                                <DatePicker
                                    id="expenseDate"
                                    name="expenseDate"
                                    placeholder="When did you make the purchase?"
                                    options={{
                                        autoClose: true,
                                        container: "body",
                                    }}
                                />
                            </form>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col size="m12 s12">
                        {tripExpense.length ? (
                            <Table>
                                <TableHead>
                                    <th>By</th>
                                    <th>Entry</th>
                                    <th>Cost</th>
                                    <th>Date</th>
                                </TableHead>
                                <TableBody>
                                    {tripExpense.map((expense, index) => (
                                        <tr key={index}>
                                            <td>{expense.expenseSubmitter}</td>
                                            <td>{expense.expenseDescription}</td>
                                            <td>${expense.expenseAmount}</td>
                                            <td>{expense.expenseDate}</td>
                                            {/* <td><compModal header="Edit Expense" onChange={handleInputChange} onClick={handleFormSubmit} trigger={<EditButton onClick={(() => editExpense(expense._id))} />} /></td> */}
                                            <td><DeleteButton onClick={(() => removeExpense(expense._id))} /></td>
                                        </tr>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <p>No expenses logged yet!</p>
                        )}
                    </Col>
                </Row>
            </Card>
        </>
    );
}
export default Expenses;
