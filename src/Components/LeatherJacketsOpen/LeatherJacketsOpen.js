import React from "react";
import style from "./LeatherJacketsOpen.module.css";
import {NavLink} from "react-router-dom";

const LeatherJacketsOpen = (props) => {
  
  let jacketPhoto1 = props.catalog.jacket[0].ItemPhoto[0];
  let jacketPhoto2 = props.catalog.jacket[0].ItemPhoto[1];
  let jacketPhoto3 = props.catalog.jacket[0].ItemPhoto[2];
  let jacketPhoto4 = props.catalog.jacket[0].ItemPhoto[3];
  let jacketPhoto5 = props.catalog.jacket[0].ItemPhoto[4];


  return(
    <div className = {style.wrappLeatherJacketsOpen}>
      <div className = {style.leatherJacketsOpen}>
        <div className = {style.wrappImages}>
          <div className = {style.images}>
            <img src = {jacketPhoto1} className = {style.jacketItem} />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto2} className = {style.jacketItem} />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto3} className = {style.jacketItem} />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto4} className = {style.jacketItem} />
          </div>
          <div className = {style.images}>
            <img src = {jacketPhoto5} className = {style.jacketItem} />
          </div>   
        </div>
        <div className = {style.wrappImageFront}>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto1} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto2} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto3} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto4} className = {style.jacketItemFront} />
          </div>
          <div className = {style.frontImages}>
            <img src = {jacketPhoto5} className = {style.jacketItemFront} />
          </div> 
        </div>
        <div className = {style.wrappChoose}>
          <div className = {style.wrappnameProd}>
            <div className = {style.nameProd}>
              {props.catalog.jacket[0].name} {props.catalog.jacket[0].typeOfClothing}
            </div>
          </div>
          <div className = {style.wrappCurrensy}>
            <div className = {style.priceProd}>
              {props.catalog.jacket[0].cost} {props.catalog.jacket[0].currency}
            </div>
          </div>
          <div className = {style.nameColor}>
            {props.catalog.paragraph[8].item}
          </div>
          <div className = {style.colorProd}>
            <div className = {style.color}>
              <div className = {style.itemColor}>
              </div>
            </div>
            <div className = {style.color}>
              <div className = {style.itemColor}>
              </div>
            </div>
          </div>
          <div className = {style.nameSize}>
            {props.catalog.paragraph[5].item}
          </div>
          <div className = {style.sizeProd}>
            <div className = {style.size}>
              {props.catalog.jacket[0].size[0]}
            </div>
            <div className = {style.size}>
              {props.catalog.jacket[0].size[1]}
            </div>
            <div className = {style.size}>
              {props.catalog.jacket[0].size[2]}
            </div>
            <div className = {style.size}>
              {props.catalog.jacket[0].size[3]}
            </div>
            <div className = {style.size}>
              {props.catalog.jacket[0].size[4]}
            </div>
            <div className = {style.size}>
              {props.catalog.jacket[0].size[5]}
            </div>
          </div>
          <div className = {style.buyProd}>
            {props.catalog.paragraph[6].item}
          </div>
        </div>
      </div>
      <div className = {style.wrappbackTo}>
        {props.catalog.paragraph[7].item}
      </div>
    </div>
  )
};

export default LeatherJacketsOpen;