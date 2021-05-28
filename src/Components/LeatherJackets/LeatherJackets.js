import React from "react";
import style from "./LeatherJackets.module.css";
import Jacket from "../Jacket/Jacket.js";
import {NavLink} from "react-router-dom";

const LeatherJackets = (props) => {
  let JacketItem = props.catalog.jacket.map( (catItem) =>
    <Jacket photo = {catItem.ItemPhoto[0]} 
            name = {catItem.name} 
            typeOfClothing = {catItem.typeOfClothing} 
            review = {catItem.review} 
            cost = {catItem.cost} 
            currency = {catItem.currency}
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
            <NavLink to = "/leather_jackets" activeClassName={style.active}>{props.catalog.paragraph[1].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/coats_parkas">{props.catalog.paragraph[2].item}</NavLink>
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
        {JacketItem}
      </div>
    </div>
  )
};

export default LeatherJackets;


