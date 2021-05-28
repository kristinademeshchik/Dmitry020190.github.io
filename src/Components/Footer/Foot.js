import React from "react";
import style from "./Foot.module.css";
import iconConvert from "../../Img/Icon/iconConvert.svg";
import iconLogo from "../../Img/Footer/LOGO_x120@2x.png";
import iconPay from "../../Img/Footer/payment-logos.png";

const Foot = (props) => {
  return (
    <div className = {style.wrappFooter}>
      <div className = {style.footer}>
        <div className = {style.informContact}>
          <div className = {style.itemContact}>
            {props.foot.infoMarket.post}
          </div>
          <div className = {style.itemContact}>
            {props.foot.infoMarket.commentPost}
          </div>
          <div className = {style.itemContact}>
            {props.foot.infoMarket.commentWorking}
          </div>
          <div className = {style.itemContact}>
            {props.foot.infoMarket.working}
          </div>
        </div>
        <div className = {style.wrappInputEmail}>
          <div className = {style.itemInputEmail}>
            {props.foot.infoEmail.commentEmail}
          </div>
          <div className = {style.wrappEmail}>
            <div className = {style.infEmail}>
              {props.foot.infoEmail.email}
            </div>
            <div className = {style.enterEmail}>
              <img src={iconConvert} className = {style.email}/>
            </div>
          </div>
        </div>
        <div className = {style.linkFoot}>
          <div className = {style.link}>
            {props.foot.navigation.item1}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item2}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item3}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item4}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item5}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item6}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item7}
          </div>
          <div className = {style.link}>
            {props.foot.navigation.item8}
          </div>
        </div>
        <div className = {style.wrappIconLogo}>
          <img src = {iconLogo} className = {style.iconLogo}/>
        </div>
      </div>
      <div className = {style.wrappInfoPay}>
        <div className = {style.wrappIconPay}>
          <img src = {iconPay} className = {style.iconPay} />
        </div>
        <div className = {style.year}>
          {props.foot.infoRights.item1}
        </div>
        <div className = {style.rigths}>
          <div className = {style.item}>
            {props.foot.infoRights.item2} 
          </div>
          <div className = {style.item}>
            {props.foot.infoRights.item3}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Foot;