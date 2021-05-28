import React from "react";
import style from "./Info.module.css";
import {NavLink} from "react-router-dom";

const Info = (props) => {
  return (
    <div className = {style.wrappInfo}>
      <div className = {style.info}><NavLink to="/about_us">{props.info[0].infoItem_1}</NavLink></div>
      <div className = {style.info}><NavLink to="/contact_us">{props.info[1].infoItem_2}</NavLink></div>
      <div className = {style.info}><NavLink to="/track_order">{props.info[2].infoItem_3}</NavLink></div>
    </div>
  )
};

export default Info;