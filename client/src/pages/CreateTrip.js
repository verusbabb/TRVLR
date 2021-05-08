import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";

function CreateTrip() {

    return (
        <>
            <Container>
                <Card>
                    <h1>Create a New Trip</h1>
                </Card>
                <Card>
                    <p>Where are you going?</p>
                </Card>
            </Container>
        </>
    )
}

export default CreateTrip;