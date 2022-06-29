import React, {Fragment, useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: 'Roboto', cursive;
    color: #FFF;

    font-weight: bold; 
    font-size: 1.8rem;
    margin-top: 2rem;
    display: block
`

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem; 
    -webkit-appearance: none; 
    border-radius: 10px;
    border: none; 
    font-size: 1.1rem;
    text-align: center
`

//! Manejar el estado de las divisas y hacer peticiones a la API!
//? Elegir las distintas opciones de moneda
const useCripto = (label, stateInicial, Opciones) => {

    //! State del hook personalizado
    const [state, updateState] = useState(stateInicial) 

    //! Es lo que se muestra en pantalla
    const SelectionCrypto = () => (
        <Fragment>
            <Label> {label} </Label>
            <Select onChange={event =>  updateState(event.target.value)}
            value={state}>  
            
                <option value=''> - Seleccione - </option>
                {Opciones.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}> {option.CoinInfo.FullName} </option>
                ))}
            </Select>
        </Fragment>
    )


//? Retornar state, interfaz, función que modifica el state

    return [state, SelectionCrypto, updateState]

}
export default useCripto   