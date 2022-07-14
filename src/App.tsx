import { Grid } from '@chakra-ui/react';
import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Routing from './Routing/Routing';
// Routing

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Grid w={["100%"]} bg={"gray.100"}>
          
        <Grid p={"1rem"} w={["95%","95%","90%"]} mx={"auto"} bg={"white"}>
        <Routing />
        </Grid>
        </Grid>
    </div>
    </BrowserRouter>
  )
}

export default App