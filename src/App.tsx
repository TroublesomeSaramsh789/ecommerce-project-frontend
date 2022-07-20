import { Grid } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing/Routing";
import ContextWrapper from "./context/ContextWrapper";
// Routing

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ContextWrapper>
          <Navbar />
          <Grid w={["100%"]} bg={"gray.100"}>
            <Grid p={"1rem"} w={["95%", "95%", "90%"]} mx={"auto"} bg={"white"}>
              <Routing />
            </Grid>
          </Grid>
        </ContextWrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;
