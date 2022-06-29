import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import useMoneda  from "../hooks/useMoneda";
import useCripto from "../hooks/useCripto";
import axios from "axios";
import Error  from "./Error";



const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px; 
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease;

    &:hover  {
        background-color: #326AC0;
        cursor: pointer
    }
`

const Form = ({saveMoneda, saveCriptomoneda}) => {

    const [error, saveError] = useState(false )

    // State del listado de criptomonedas 

    const [ListCripto, saveCripto] = useState ([])

    const Monedas = [
        {code: 'USD', name: 'Dólar estadounidense'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'},
    ]
    //Usar useMoneda
    const [moneda, SelectMonedas, updateState] = useMoneda('Elige tu Moneda', '', Monedas)
    
    // Usar useCripto
    const [criptomoneda, SelectionCrypto] = useCripto('Elige tu criptomoneda', '', ListCripto)

    //Ejecutar llamado a la API

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url)
            saveCripto( result.data.Data)
        }
        consultarAPI();
    }, []);

    //cuando el usuario hace submit

const cotizarMoneda = event => {
    event.preventDefault()

    // Validar los campos 

    if(moneda === '' || criptomoneda === ''){
        saveError(true)
        return
    }
     // Caso contrario, se pasan los elementos al componente principal
     saveError(false) 
     saveMoneda(moneda)
     saveCriptomoneda(criptomoneda)
}
  
    return (
        <form
        onSubmit={cotizarMoneda}>
            {error ? <Error message='Todos los campos deben de estar llenos'/> : null}
            <SelectMonedas/>
            <SelectionCrypto/>
            <Boton 
                type='submit'
                value='Calcular'            
            />        
        </form>
    )
}

export default Form