import React from "react";
import style from "./ContactUs.module.css";
import ButtonSend from "../ButtonViewing/ButtonSend.js";

const ContactUs = (props) => {
  return (
    <div className = {style.wrappContainerContactUs}>
      <div className = {style.containerWrappContactUs1}>
        <div className = {style.wrappContactUs}>
          <div className = {style.contactUsBlock1}>
            {props.contactUs[0].name}
          </div>
          <div className = {style.contactUsBlock2}>
            <div className = {style.wrappText}>
              {props.contactUs[0].text[0].itemText}
            </div>
            <div className = {style.wrappText}>
              {props.contactUs[0].text[1].itemText}
            </div>
          </div>
        </div>
      </div>
      <div className = {style.containerWrappContactUs2}>
        <div className = {style.contactUsBlock3}>
          <div className = {style.wrappInfoName}>
            <div className = {style.infoName1}>{props.contactUs[0].text[2].itemText}</div>
            <div className = {style.infoName2}></div>
          </div>
          <div className = {style.wrappInfoName}>
            <div className = {style.infoName3}>{props.contactUs[0].text[3].itemText}</div>
            <div className = {style.infoName4}>JJJJ</div>
          </div>
        </div>
        <div className = {style.contactUsBlock4}>
          <div className = {style.infoName5}>{props.contactUs[0].text[4].itemText}</div>
          <div className = {style.infoName6}></div>
        </div>
      </div>
      <ButtonSend buttonSend = {props.contactUs[0].text[5].itemText} /> 
    </div>
  )
};

export default ContactUs;