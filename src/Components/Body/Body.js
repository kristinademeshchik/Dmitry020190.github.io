import React from "react";
import styly from "./Body.module.css";
import {Route} from "react-router-dom";
import Main from "../Main/Main.js";
import AboutUs from "../AboutUs/AboutUs.js";
import ContactUs from "../ContactUs/ContactUs.js";
import TrackOrder from "../TrackOrder/TrackOrder.js";
import Catalog from "../Catalog/Catalog.js";
import LeatherJackets from "../LeatherJackets/LeatherJackets.js";
import ShoesCatalog from "../ShoesCatalog/ShoesCatalog.js";
import ParksCatalog from "../ParkasCatalog/ParkasCatalog.js";
import BagCatalog from "../AccessoriesCatalog/AccessoriesCatalog.js";
import LeatherJacketsOpen from "../LeatherJacketsOpen/LeatherJacketsOpen.js";

const Body = (props) => {
  return (
    <>
      <Route path = "/about_us" 
        render = { () => <AboutUs aboutUs = {props.body.aboutUs}  />
        } 
      />

      <Route path = "/contact_us" 
        render = { () => <ContactUs contactUs = {props.body.contactUs} />
        }
      />

      <Route path = "/track_order"
        render = { () => <TrackOrder  />
        } 
      />

      <Route path = "/home"
        render = { () => <Main  main = {props.body.main} />
        }
      /> 

      <Route path = "/catalog"
        render = { () => <Catalog catalog = {props.body.main} />
        }
      /> 

      <Route path = "/leather_jackets"
        render = { () => < LeatherJackets catalog = {props.body.main} />
        }
      />

      <Route path = "/shoes"
        render = { () => < ShoesCatalog catalog = {props.body.main} />
        }
      /> 

      <Route path = "/coats_parkas"
        render = { () => < ParksCatalog catalog = {props.body.main} />
        }
      />

      <Route path = "/accessories"
        render = { () => < BagCatalog  catalog = {props.body.main} />
        }
      />

      <Route path = "/leatherJacketsOpen"
        render = { () => < LeatherJacketsOpen catalog = {props.body.main} />
        }
      />

   </>
  )
}

export default Body;

