import React, { useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import Card from "../components/Card";
import { Input, TextArea, FormBtn } from "../components/Form";
// import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Table, TableHead, TableBody } from "../components/Table";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { Modal, Button, DatePicker } from "react-materialize";
import DeleteButton from "../components/DeleteBtn";
// import EditButton from "../components/EditBtn";
// import compModal from "../components/Modal";

function Expenses() {
  const [tripExpense, setTripExpense] = useState({});
  const [trip, setTrip] = useState({});
  const [formObject, setFormObject] = useState({});
  const { state } = useUserContext();

  const { id } = useParams();

  useEffect(() => {
    loadTrip();
  }, [id]);

  function loadTrip() {
    API.getTrip(id)
      .then((res) => {
        setTrip(res.data);
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
    console.log(state);
    event.preventDefault();
    if (formObject.expenseAmount) {
      API.createExpense(id, {
        expenseDescription: formObject.expenseDescription,
        expenseAmount: formObject.expenseAmount,
        expenseSubmitter: state.firstName,
        expenseDate: document.getElementById("expenseDate").value,
      })
        .then((res) => {
          console.log(res);
          loadTrip();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Row>
            <Col size="m12 s12">
              <Jumbotron>
                <h1>{trip.tripName}</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Card>
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
                  <FormBtn onClick={handleFormSubmit}>Add</FormBtn>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Add an Expense"
                id="Modal-0"
                className="modal"
                open={false}
                options={{
                  container: "body",
                  dismissible: true,
                  endingTop: "10%",
                  inDuration: 250,
                  opacity: 0.5,
                  outDuration: 250,
                  preventScrolling: true,
                  startingTop: "4%",
                }}
                trigger={<Link node="button">+ Add an Expense</Link>}
              >
                <form>
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
                  <DatePicker
                    id="expenseDate"
                    name="expenseDate"
                    placeholder="When did you make the purchase?"
                    options={{
                      autoClose: false,
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
                <div>
                  <Table>
                    <TableHead>
                      <th>By</th>
                      <th>Desc.</th>
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
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
            <Col size="m12 s12">
              <Link to={"/trips/" + id}>← Back to Trip</Link>
            </Col>
          </Row>
          <Row>
            <Col size="m12 s12">
              <Link to="/dashboard">← Back to Dashboard</Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default Expenses;
