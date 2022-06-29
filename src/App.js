import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png" 
import React, {useEffect, useState } from "react";
import Form  from "./components/Form";
import axios from 'axios'
import Cotizacion  from "./components/Cotización";
import Spinner from "./components/Spinner";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem
    }
`

const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`

const Heading = styled.h1`
    font-family: 'Roboto', cursive; 
    color: #FFF;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after{
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display: block 
    }
`

function App() {

  const [moneda, saveMoneda] = useState('')
  const [criptomoneda, saveCriptomoneda] = useState('')
  const [resultado, saveResultado] = useState({})
  const [loading, saveLoading] = useState(false)

  useEffect(() => {

    const CotizarCripto = async () => {
          // Se evita la ejecución la primer vez
      if(moneda === '') return

      // Consulta a la API para obtener la cotizacón
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const Result = await axios.get(url)

      // Se usa el Spinner
      saveLoading(true)

      // Se oculta el spinner y mostrar el resultado

      setTimeout(() => {

        // Cambiar el estado de loading
        saveLoading(false)

        // guardar cotización
        saveResultado(Result.data.DISPLAY[criptomoneda][moneda])
      }, 3000)
      
    }
    CotizarCripto() 

  }, [moneda, criptomoneda])

  // MOstrar spinner o resultado

  const Component = (loading) ? <Spinner /> : <Cotizacion result={resultado}/> 

  return (
    <Container>
      <div>
        <Imagen
          src={imagen}
          alt='imagen cripto'  
        /> 
      </div>
      <div>
        <Heading>
          Cotiza Criptomonedas al instante!
        </Heading>
        <Form 
          saveCriptomoneda = {saveCriptomoneda}
          saveMoneda = {saveMoneda}
        />
        {Component}

      </div>
    </Container>
  );
}

export default App;
