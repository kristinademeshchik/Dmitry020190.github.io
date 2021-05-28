import React from "react";
import style from "./Menu.module.css";
import close from "../../Img/Icon/iconClose.png";
import {NavLink} from "react-router-dom";

const Menu = (props) => {

  let newStyleElem = React.createRef();

  let clickSendMenu = () => {
    let newStyle = newStyleElem.current;
    newStyle.style.display = "block";
  }
  
  let clickCloseMenu = () => {
    let newStyle = newStyleElem.current;
    newStyle.style.display = "none";
  }

	return (
		
    <div className = {style.wrapperMenu}>
      <div className = {style.wrappMenu} onClick = {clickSendMenu}>
        <div className = {style.sandMenu}>
          <div className = {style.sandItem}></div>
          <div className = {style.sandItem}></div>
          <div className = {style.sandItem}></div>
        </div>
      </div>
      <div className = {style.wrappSizeSandMenu} ref = {newStyleElem}>
        <div className = {style.wrappClose}>
          <div className = {style.currency}>{props.menu[6].navItem_7}</div>
          <div className = {style.wrappImgClose} onClick = {clickCloseMenu}>
            <img src={close} className = {style.close} />
          </div>
        </div>
        <div className = {style.wrappItemElement}>
          <NavLink to = "/home" activeClassName={style.active}>
            <div className = {style.itemElement}>
              {props.menu[0].navItem_1}
            </div>
          </NavLink>
          <NavLink to = "/catalog" activeClassName={style.active}>
            <div className = {style.itemElement}>
              {props.menu[1].navItem_2}
            </div>
          </NavLink>
          <NavLink to = "/leather_jackets" activeClassName={style.active}>
            <div className = {style.itemElement}>
              {props.menu[2].navItem_3}
            </div>
          </NavLink>
          <NavLink to = "/coats_parkas" activeClassName={style.active}>
            <div className = {style.itemElement}>
              {props.menu[3].navItem_4}
            </div>
          </NavLink>
          <NavLink to = "/shoes" activeClassName={style.active}>
            <div className = {style.itemElement}>
              {props.menu[4].navItem_5}
            </div>
          </NavLink>
          <NavLink to = "/accessories" activeClassName={style.active}>
            <div className = {style.itemElement}>
              {props.menu[5].navItem_6}
            </div>
          </NavLink>
        </div>
        <div className = {style.wrappItemElementInfo}>
          <div className = {style.itemElementInfo}>
            <NavLink to = "/about_us" activeClassName={style.active}>
              {props.infoMenu[0].infoItem_1}
            </NavLink>
          </div>
          <div className = {style.itemElementInfo}>
            <NavLink to = "/contact_us" activeClassName={style.active}>
              {props.infoMenu[1].infoItem_2}
            </NavLink>
          </div>
        </div>
        <div className = {style.itemElementInfo}>
          <NavLink to = "/track_order" activeClassName={style.active}>
            {props.infoMenu[2].infoItem_3}
          </NavLink>
        </div>
      </div>
    </div>  
	)
}

export default Menu;