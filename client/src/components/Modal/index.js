import React from 'react'
import { Modal, Button, DatePicker } from "react-materialize";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../Form";

function compModal(props) {
    return (
        <div>
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">
                Close
                </Button>,
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header={props.header}
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
            trigger={<Link node="button">{props.trigger}</Link>}
        />
        <form>
                  <Input
                    onChange={props.onChange}
                    name="expenseDescription"
                    placeholder="Brief description of the expense"
                  />
                  <Input
                    onChange={props.onChange}
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
                  <FormBtn onClick={props.onClick}>Add</FormBtn>
        </form>
        </div>
    )
}

export default compModal
