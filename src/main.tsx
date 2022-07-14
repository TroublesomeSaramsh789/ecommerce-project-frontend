import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { createStandaloneToast } from "@chakra-ui/toast";

// const { ToastContainer, toast } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      {/* <ToastContainer /> */}
    </ChakraProvider>
  </React.StrictMode>
);
