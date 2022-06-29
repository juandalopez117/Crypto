import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
    font-family: 'Roboto';
    color: #FFF; 
`

const Info = styled.p`
    font-size: 18px;
    font-family: 'Roboto'
    span {
        font-weight: bold; 
    }

`

const Price = styled.p`
    font-size: 30px;

    span{
        font-weight: bold
    }
`

const Cotizacion = ({result}) => {
    if(Object.keys(result).length === 0) return  null

    console.log(result)

    return (
        <ResultDiv>
            <Price> Price: <span>{result.PRICE}</span> </Price>
            <Info> Highest value of the day: <span>{result.HIGHDAY}</span> </Info>
            <Info> Lowest value of the day: <span>{result.LOWDAY}</span> </Info>
            <Info> Variation last 24 hours:  <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info> Last update: <span>{result.LASTUPDATE}</span> </Info>
        </ResultDiv>

    )
}

export default Cotizacion