import React from 'react';
import IMC from './Components/IMC-Calc'
import Table from './Components/table'
import { GlobalStyle } from './Global/GlobalStyle';

export default function App() {

  return (
    <>
      <GlobalStyle />
      <IMC />
      <Table />
    </>
  )
}
