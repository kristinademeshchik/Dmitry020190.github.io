import React from "react";
import style from "./Jacket.module.css";

const Jacket = (props) => {
  
  return (
    <div className = {style.wrappProd}>
      <div className = {style.wrappImgProd}>
        <img src = {props.photo} className = {style.imgProd}/>
      </div>
      <div className = {style.wrappInfo}>
        <div className = {style.name}>
          {props.name}
        </div>
        <div className = {style.name}>
          {props.typeOfClothing}
        </div>
        <div className = {style.review}>
          {props.review}
        </div>
        <div className = {style.cost}>
          {props.cost} {props.currency}
        </div>
      </div>
    </div> 
  )
};

export default Jacket;