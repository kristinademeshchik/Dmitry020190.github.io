import React from "react";
import style from "./Catalog.module.css";
import Jacket from "../Jacket/Jacket.js";
import Bag from "../Bag/Bag.js";
import Shoes from "../Shoes/Shoes.js";
import {NavLink} from "react-router-dom";

const Catalog = (props) => {
  let JacketItem = props.catalog.jacket.map( (catItem) =>
    <Jacket photo = {catItem.ItemPhoto[0]} 
            name = {catItem.name} 
            typeOfClothing = {catItem.typeOfClothing} 
            review = {catItem.review} 
            cost = {catItem.cost} 
            currency = {catItem.currency}
    />
  )

  let BagItem = props.catalog.bag.map( (catItem) =>
    <Bag  photo = {catItem.Item} 
          name = {catItem.name} 
          typeOfClothing = {catItem.typeOfClothing} 
          review = {catItem.review} 
          cost = {catItem.cost} 
          currency = {catItem.currency}
    />
  )

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
        <div className = {style.nameParagraph}>
          <NavLink to = "/catalog" activeClassName={style.active}>{props.catalog.paragraph[0].item}</NavLink>
        </div>
        <div className = {style.wrappItemParagraph}>
          <div className = {style.paragraph}>
            <NavLink to = "/leather_jackets">{props.catalog.paragraph[1].item}</NavLink>
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
          <div>
            <NavLink to = "/leatherJacketsOpen">1</NavLink>
          </div>
        </div>
      </div>
      <div className = {style.catalog}>
        {JacketItem}
        {BagItem}
        {ShoesItem}
      </div>
    </div>
  )
};

export default Catalog;