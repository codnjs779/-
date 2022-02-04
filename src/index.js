import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/common/font/font.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter } from "react-router-dom";
import { app } from "./service/firebase";
import AuthService from "./service/authservice";

const authService = new AuthService(app);

ReactDOM.render(
    <BrowserRouter>
        <App authService={authService} />
    </BrowserRouter>,
    document.getElementById("root")
);
