import React from "react";
import { Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

function Signout() {

  const validated = () => {
    API.signOut()
    .then(res => {
      console.log("signout")
    });
    localStorage.clear();
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
            <span>You have been signed out. Redirecting to Home...</span>
          </p>
        </Card>
      </Container>
    </>
  );
}

export default Signout;
