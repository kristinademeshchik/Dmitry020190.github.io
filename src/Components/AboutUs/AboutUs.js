import React from "react";
import style from "./AboutUs.module.css";
import AboutUsPhoto from "../../Img/Info/ABOUT_US/ABOUT.png";

const AboutUs = (props) => {
  return (
    <div className = {style.containerWrappAboutUs}>
      <div className = {style.wrappAboutUs}>
        <div className = {style.aboutUsBlock1}>
          {props.aboutUs[0].name}
        </div>
        <div className = {style.aboutUsBlock2}>
          <div className = {style.wrappImg}>
            <img src={AboutUsPhoto} className = {style.img} />
          </div>
        </div>
        <div className = {style.aboutUsBlock3}>
          <div className = {style.text}>{props.aboutUs[0].text[0].itemText}</div>
          <div className = {style.text}>{props.aboutUs[0].text[1].itemText}</div>
          <div className = {style.text}>{props.aboutUs[0].text[2].itemText}</div>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;

