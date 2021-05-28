import React from "react";
import style from "./ButtonViewing.module.css";
import {NavLink} from "react-router-dom";

const ButtonViewing = (props) => {
  return(
    <NavLink to = "/catalog">
      <div className = {style.wrappButton}>
        <div className = {style.button}>
          {props.button[0].name}
        </div> 
      </div>
    </NavLink>
  )
};

export default ButtonViewing;



