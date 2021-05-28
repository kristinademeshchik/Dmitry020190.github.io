import React from "react";
import style from "./Aside.module.css";
import asidePhoto from "../../Img/Aside/Aside.jpeg";

const Aside = (props) => {
  return (
    <div className = {style.wrappAside}>
      <img src = {asidePhoto} className = {style.aside}/>
    </div>
  )
};

export default Aside;