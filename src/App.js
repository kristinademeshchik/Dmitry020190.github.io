import React from "react";
import './App.css';
import Nav from "./Components/Nav/Nav.js";
import Info from "./Components/Info/Info.js";
import Foot from "./Components/Footer/Foot.js";
import Body from "./Components/Body/Body.js";

import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = "wrappTegs">
        <Info info = {props.store.info} />
        <Nav nav = {props.store.nav} info = {props.store.info}/>
        <Body body = {props.store}/>
        <Foot foot = {props.store.foot} />
      </div>
    </BrowserRouter>
  )
}

export default App;

