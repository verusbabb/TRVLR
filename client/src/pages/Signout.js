import React, { useState, useEffect } from "react";
import { useUserContext } from "../utils/userContext";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

function Signout() {
  const { state } = useUserContext();
  // const [logout, setLogout] = useState([]);
  const [success, setSuccess] = useState(true);

  const validated = () => {
    API.signOut()
    .then(res => {
      console.log("signout")
    });
    localStorage.clear();
    // setSuccess(true);
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
    return () => {
      clearTimeout();
    };
  };

  validated();

  return (
    <>
      <Container>
        <Card>
          <p>
            {success && (
               <span>You have been signed out. Redirecting to Home...</span>
            )}
          </p>
        </Card>
      </Container>
    </>
  );
}

export default Signout;
