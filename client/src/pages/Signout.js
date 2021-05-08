import React, { useState, useEffect } from "react";
import { useUserContext } from "../utils/userContext";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

function Signout() {

    const [state] = useUserContext();
    // const [logout, setLogout] = useState([]);
    const [success, setSuccess] = useState(true);

    const validated = () => {
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
                    {success && <div> You have been signed out. Redirecting to Home...</div>}
                    </p>
                </Card>
            </Container>
        </>
    )
}

export default Signout