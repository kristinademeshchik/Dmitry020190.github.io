import React from "react";
import style from "./Nav.module.css";
import logo from "../../Img/Logo/Logo.png";
import basket from "../../Img/Logo/Basket.png";
import {NavLink} from "react-router-dom";
import Menu from "../Menu/Menu.js";

const Nav = (props) => {
  return (

    <div className = {style.blockNav}>
      <div className = {style.wrappNav}>
        <div className = {style.wrappBlok1}>
          <div className = {style.wrappMenu}>
            <Menu menu={props.nav} infoMenu = {props.info} />
          </div>
          <div className = {style.wrappBlok1_1}>
            <div className = {style.wrappSearch}>
              <img src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" className = {style.search} />
            </div>
          </div>
          <div className = {style.wrappBlok1_2}>
            <div className = {style.nav}>
              <NavLink to="/home">{props.nav[0].navItem_1}</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/catalog">{props.nav[1].navItem_2}</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/leather_jackets">{props.nav[2].navItem_3}</NavLink>
            </div>
          </div>
        </div>
        <div className = {style.wrappBlok2}>
          <div className = {style.wrappLogo}>
            <NavLink to="/home"><img src = {logo} className = {style.logo}/></NavLink>
          </div>
        </div>
        <div className = {style.wrappBlok3}>
          <div className = {style.wrappBlok3_1}>
            <div className = {style.nav}>
              <NavLink to="/coats_parkas">{props.nav[3].navItem_4}</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/shoes">{props.nav[4].navItem_5}</NavLink>
            </div>
            <div className = {style.nav}>
              <NavLink to="/accessories">{props.nav[5].navItem_6}</NavLink>
            </div>
          </div>
          <div className = {style.wrappBlok3_2}>
            <div className = {style.wrappCurrency}>
              <div className = {style.wrappBlok1_1}>
                <div className = {style.wrappSearch}>
                  <img src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" className = {style.search} />
                </div>
              </div>
              <div className = {style.currency}>
                {props.nav[6].navItem_7}
              </div>
              <div className = {style.wrappBasket}>
                <img src = {basket} className = {style.basket} />
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className = {style.saleInfo}>
        {props.nav[7].navItem_8}
      </div>
    </div>
  ) 
};

export default Nav;