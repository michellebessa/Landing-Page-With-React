//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/jumbotron.css"
import "../styles/card.css"

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
