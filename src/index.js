import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

window.onload = function () {
    if (localStorage.getItem("theme")) {
        document.getElementById("body").className =
            localStorage.getItem("theme") || "paper";
        console.log("Preferred theme: ", localStorage.getItem("theme"));
    } else {
        console.log("Default theme: ", document.getElementById("body").className);
    }
};


ReactDOM.render(<App />, document.querySelector("#root"));
