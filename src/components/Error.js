import React from "react";
import styled  from "@emotion/styled";

const ErrorMessage = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 20px;

    font-weight: bold;
    text-align: center;
    font-family: 'Roboto', cursive; 
`

const Error = ({message}) => {
    return (
        <ErrorMessage>
            {message}
        </ErrorMessage>
    )
}

export default Error