import { render } from "@testing-library/react";
import React from "react";
import App from "./App.js"
import ReactDOM from "react-dom"
import Book from "./props.js"
import Welcome from "./state.js";
import  "./index.css"
import Statejs from "./statefunction.js";
import Greet from "./conditionalrendering.js";
import HandelEvent from "./hadlingevent.js";
import ClickEventHandler from "./classevent.js";
import Inputjs from "./getinput.js";
// import Construct from "./Bindin.js";
function GetRender() {
    return(
        <div>
        <App />
       
        {/* <Construct /> */}
        <Book/>
        <Welcome  />
        <Statejs />
        <Greet />
        <HandelEvent />
        <ClickEventHandler />
        <Inputjs />
        </div>
    )
}

ReactDOM.render(<GetRender /> , document.getElementById("root"))