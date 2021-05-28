import React from "react";
import style from "./Main.module.css";
import Jacket from "../Jacket/Jacket.js";
import CoatsParkas from "../CoatsParkas/CoatsParkas.js";
import Bag from "../Bag/Bag.js";
import Shoes from "../Shoes/Shoes.js";
import ButtonViewing from "../ButtonViewing/ButtonViewing.js";
import Aside from "../Aside/Aside.js";

const Main = (props) => {
  let JacketElement = props.main.jacket.map( (jack) => 
    <Jacket photo = {jack.ItemPhoto[0]} 
            name = {jack.name} 
            typeOfClothing = {jack.typeOfClothing} 
            review = {jack.review} 
            cost = {jack.cost} 
            currency = {jack.currency} 
    />
  )

  let ParkElement = props.main.parks.map( (park) => 
    <CoatsParkas  photo = {park.Item} 
                  name = {park.name} 
                  typeOfClothing = {park.typeOfClothing} 
                  review = {park.review} 
                  cost = {park.cost} 
                  currency = {park.currency} 
    />
  )

  let BagElement = props.main.bag.map( (bags) => 
    <Bag  photo = {bags.Item} 
          name = {bags.name} 
          typeOfClothing = {bags.typeOfClothing} 
          review = {bags.review} 
          cost = {bags.cost} 
          currency = {bags.currency} 
    />
  )

  let ShoesElement = props.main.shoes.map( (sh) => 
    <Shoes  photo = {sh.Item} 
            name = {sh.name} 
            typeOfClothing = {sh.typeOfClothing} 
            review = {sh.review} 
            cost = {sh.cost} 
            currency = {sh.currency} 
    />
  )

  return (
    <div className = {style.wrappMain}>
      <div className = {style.wrappMainProd}>
        <Aside />
        <div className = {style.main}>
           {JacketElement}
           {BagElement}
           {ShoesElement}
        </div> 
      </div>
      <div className = {style.wrappButtonViewing}>
        <ButtonViewing button = {props.main.ButtonViewing} />
      </div>
    </div>
  )
};

export default Main;



