import React from "react";
import style from "./ShoesCatalog.module.css";
import Shoes from "../Shoes/Shoes.js";
import {NavLink} from "react-router-dom";

const ShoesCatalog = (props) => {

  let ShoesItem = props.catalog.shoes.map( (catItem) =>
    <Shoes  photo = {catItem.Item} 
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
            <NavLink to = "/leather_jackets">{props.catalog.paragraph[1].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/coats_parkas">{props.catalog.paragraph[2].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/shoes" activeClassName={style.active}>{props.catalog.paragraph[3].item}</NavLink>
          </div>
          <div className = {style.paragraph}>
            <NavLink to = "/accessories">{props.catalog.paragraph[4].item}</NavLink>
          </div>
        </div>
      </div>
      <div className = {style.catalog}>
        {ShoesItem}
      </div>
    </div>
  )
};

export default ShoesCatalog;

