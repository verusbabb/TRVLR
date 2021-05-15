import React from "react";

export function TableHead(props) {
    return <>
        <thead>
            <tr>
            {props.children}
            </tr>
        </thead>
    </>
}