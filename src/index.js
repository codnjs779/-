import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/common/font/font.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
