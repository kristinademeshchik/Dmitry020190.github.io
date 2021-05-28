import React from "react";
import style from "./TrackOrder.module.css";

const TrackOrder = (props) => {
  return (
    <div className = {style.trackOrder}>
      <div className = {style.name}>TRACK ORDER</div>
      <div className = {style.item}>Have you already received your tracking number? Wohoo, let's track it!</div>
      <div className = {style.item}>Copy the tracking code you received in your email address and paste it in our courier website below.</div>
      <div className = {style.item}>Click Here To Track Your Order</div>
      <div className = {style.item}>If any problem arises, please contact our team at support@davidoutwear.com</div>
    </div>
  )
};

export default TrackOrder;