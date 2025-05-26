import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import  ContextProvider  from "./components/Context/ContextProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</ContextProvider>, document.getElementById("root"));

