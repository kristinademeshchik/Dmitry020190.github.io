import React from "react";
import style from "./ParkasCatalog.module.css";
import CoatsParkas from "../CoatsParkas/CoatsParkas.js";
import {NavLink} from "react-router-dom";

const ParksCatalog = (props) => {

  let ParkItem = props.catalog.parks.map( (park) => 
    <CoatsParkas  photo = {park.Item} 
                  name = {park.name} 
                  typeOfClothing = {park.typeOfClothing} 
                  review = {park.review} 
                  cost = {park.cost} 
                  currency = {park.currency} 
    />
  )
  return (
    <div className ={style.wrappCatalog}>
      <div className = {style.wrappParagraph}>
        <div className = {style.wrappNameParagraph}>
          <NavLink to = "/catalog">{props.catalog.paragraph[0].item}</NavLink>
        </div>
        <div className = {style.wrappItemParagraph}>
          <div className = {style.paragraph}>
            <NavLink to = "/leather_jackets">{props.catalog.paragraph[1].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/coats_parkas" activeClassName={style.active}>{props.catalog.paragraph[2].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/shoes">{props.catalog.paragraph[3].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/accessories">{props.catalog.paragraph[4].item}</NavLink>
          </div>
        </div>
      </div>
      <div className = {style.catalog}>
        {ParkItem}
      </div>
    </div>
  )
};

export default ParksCatalog;