import { Container } from "../Grid";
import React from "react";

export function Table(props) {
    return (
        <>
            <Container>
                <table className="responsive-table">
                    {props.children}
                </table>
            </Container>
        </>

    )
}