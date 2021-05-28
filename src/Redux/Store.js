import Jacket01 from "../Img/main/Kyrtki/Kyrtka_1/Kyrtka_1.jpeg";
import Jacket01_1 from "../Img/main/Kyrtki/Kyrtka_1/Kyrtka_1.1.jpeg";
import Jacket01_2 from "../Img/main/Kyrtki/Kyrtka_1/Kyrtka_1.2.jpeg";
import Jacket01_3 from "../Img/main/Kyrtki/Kyrtka_1/Kyrtka_1.3.jpeg";
import Jacket02 from "../Img/main/Kyrtki/Kyrtka_2/Kyrtka_2.jpeg";
import Jacket02_1 from "../Img/main/Kyrtki/Kyrtka_2/Kyrtka_2.1.jpeg";
import Jacket02_2 from "../Img/main/Kyrtki/Kyrtka_2/Kyrtka_2.2.jpeg";
import Jacket03 from "../Img/main/Kyrtki/Kyrtka_3/Kyrtka_3.jpeg";
import Jacket03_1 from "../Img/main/Kyrtki/Kyrtka_3/Kyrtka_3.1.jpeg";
import Jacket03_2 from "../Img/main/Kyrtki/Kyrtka_3/Kyrtka_3.2.jpeg";
import Jacket04 from "../Img/main/Kyrtki/Kyrtka_4/Kyrtka_4.jpeg";
import Jacket04_1 from "../Img/main/Kyrtki/Kyrtka_4/Kyrtka_4.1.jpeg";
import Jacket04_2 from "../Img/main/Kyrtki/Kyrtka_4/Kyrtka_4.2.jpeg";
import Jacket04_3 from "../Img/main/Kyrtki/Kyrtka_4/Kyrtka_4.3.jpeg";
import Jacket04_4 from "../Img/main/Kyrtki/Kyrtka_4/Kyrtka_4.4.jpeg";
import Jacket05 from "../Img/main/Kyrtki/Kyrtka_5/Kyrtka_5.jpeg";
import Jacket05_1 from "../Img/main/Kyrtki/Kyrtka_5/Kyrtka_5.1.jpeg";
import Jacket05_2 from "../Img/main/Kyrtki/Kyrtka_5/Kyrtka_5.2.jpeg";
import Jacket05_3 from "../Img/main/Kyrtki/Kyrtka_5/Kyrtka_5.3.jpeg";
import Jacket05_4 from "../Img/main/Kyrtki/Kyrtka_5/Kyrtka_5.4.jpeg";
import Sumka01 from "../Img/main/Sumki/Sumka_1.jpeg";
import Sumka02 from "../Img/main/Sumki/Sumka_2.jpeg";
import Sumka03 from "../Img/main/Sumki/Sumka_3.jpeg";
import Tyfli01 from "../Img/main/Obyv/Tyfli_1.jpeg";
import Tyfli02 from "../Img/main/Obyv/Tyfli_2.jpeg";
import Tyfli03 from "../Img/main/Obyv/Tyfli_3.jpeg";
import Tyfli04 from "../Img/main/Obyv/Tyfli_4.jpeg";
import Parks01 from "../Img/main/Parks/Parks01.jpeg";
import Parks02 from "../Img/main/Parks/Parks02.jpeg";
import Parks03 from "../Img/main/Parks/Parks03.jpeg";
import Parks04 from "../Img/main/Parks/Parks04.jpeg";
import Logo from "../Img/main/logo.jpeg";

const Store = {
  _state: {
    info: [
      {id: 1, infoItem_1: "About Us"},
      {id: 2, infoItem_2: "Contact Us"},
      {id: 3, infoItem_3: "Track Order"},
    ],

    aboutUs: [
      {id: 1, name: "ABOUT US", 
        text: [ 
          {id: 1, itemText: "David Outwear is all about style. Our exceptional products combined with unmatched customer service will make your shopping experience so awesome that you'll be surprised that companies like us exist."},
          {id: 2, itemText: "We put our empathizes to provide unique products with great value so you can feel and look special while you rock them at any given time. Our deals are super valuable, we provide coupons regularly and all of our products are covered with a tempting sale on a daily basis."},
          {id: 3, itemText: "Shopping online can be something scary, but at David Outwear we make sure to cover you first with 30 days money-back guarantee, so you can feel comfortable to shop with us knowing we got your back."},
        ]
      },
    ],

    contactUs: [
      {id: 1, name: "CONTACT US",
        text: [
          {id: 1, itemText: "We would love to hear your feedback and thoughts. If you have any questions or you just want to share a photo of your new item on our store, you can email us at support@davidoutwear.com or use the contact form below!"},
          {id: 2, itemText: "220 The Vale, London, United Kingdom"},
          {id: 3, itemText: "NAME"},
          {id: 4, itemText: "EMAIL"},
          {id: 5, itemText: "MESSAGE"},
          {id: 6, itemText: "SEND"},
        ],
      },
    ],

    nav: [
      {id: 1, navItem_1: "HOME"},
      {id: 2, navItem_2: "CATALOG"},
      {id: 3, navItem_3: "LEATHER JACKETS"},
      {id: 4, navItem_4: "COATS & PARKAS"},
      {id: 5, navItem_5: "SHOES"},
      {id: 6, navItem_6: "ACCESSORIES"},
      {id: 7, navItem_7: "USD"},
      {id: 8, navItem_8: "WAREHOUSE CLEARANCE SALE ENDS TODAY."}
    ],

    main: {
      paragraph: [
        {id: 1, item: "CATALOG"},
        {id: 2, item: "Leather Jackets"},
        {id: 3, item: "Coats & Parkas"},
        {id: 4, item: "Shoes"},
        {id: 5, item: "Accessories"},
        {id: 6, item: "SIZE"},
        {id: 7, item: "ADD TO CARD"},
        {id: 8, item: "BACK TO CATALOG"},
        {id: 9, item: "COLOR"},
      ],

      jacket: [
        {
          id: 1,
          ItemPhoto: [`${Jacket01}`, `${Jacket01_1}`, `${Jacket01_2}`, `${Jacket01_2}`,`${Logo}`],
          name: "DAVID OUTWEAR KINGDOM",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: "$ 94.95",
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 2,
          ItemPhoto: [`${Jacket02}`, `${Jacket02_1}`, `${Jacket02_2}`, `${Logo}`],
          name: "DAVID OUTWEAR BONANZA",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: "$ 94.95",
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 3,
          ItemPhoto: [`${Jacket03}`, `${Jacket03_1}`, `${Jacket03_2}`, `${Logo}`],
          name: "DAVID OUTWEAR BOULEVARD",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: "$ 99.95",
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 4,
          ItemPhoto: [`${Jacket04}`, `${Jacket04_1}`, `${Jacket04_2}`, `${Jacket04_3}`, `${Jacket04_4}`, `${Logo}`],
          name: "DAVID OUTWEAR TITAN",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: "$ 94.95",
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },

        {
          id: 5,
          ItemPhoto: [`${Jacket05}`, `${Jacket05_1}`, `${Jacket05_2}`, `${Jacket05_3}`, `${Jacket05_4}`, `${Logo}`],
          name: "DAVID OUTWEAR SALVADOR",
          typeOfClothing: "LEATHER JACKET",
          review: "review",
          cost: "$ 94.95",
          currency: "USD",
          size: ["XS", "S", "M", "L", "XL", "XXL"],
        },
      ],

      parks: [
        {
          id: 1,
          Item: `${Parks01}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "WALL PARKA",
          review: "review",
          cost: "$ 94.95",
          currency: "USD",  
        },

        {
          id: 2,
          Item: `${Parks02}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "INFERNO FLEECE PARKA",
          review: "review",
          cost: "$ 94.95",
          currency: "USD",  
        },

        {
          id: 3,
          Item: `${Parks03}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "SURVIVAL COTTON JACKET",
          review: "review",
          cost: "$ 89.95",
          currency: "USD",  
        },

        {
          id: 1,
          Item: `${Parks04}`,
          name: "DAVID OUTWEAR ICE",
          typeOfClothing: "WINTER FLEECE JACKET",
          review: "review",
          cost: "$ 89.95",
          currency: "USD",  
        }
      ],

      bag: [
        {
          id: 6,
          Item: `${Sumka01}`,
          name: "DAVID OUTWEAR LARGE",
          typeOfClothing: "CAPACITY BAG",
          review: "review",
          cost: "$ 84.95",
          currency: "USD",
        },

        {
          id: 7,
          Item: `${Sumka02}`,
          name: "DAVID OUTWEAR OFFICE BAG",
          typeOfClothing: "OUTWEAR OFFICE BAG",
          review: "review",
          cost: "$ 79.95",
          currency: "USD",
        },

        {
          id: 8,
          Item: `${Sumka03}`,
          name: "DAVID OUTWEAR TRAVEL LEATHER BAG",
          typeOfClothing: "OUTWEAR OFFICE BAG",
          review: "review",
          cost: "$ 79.95",
          currency: "USD",
        },
      ],

      shoes: [
        {
          id: 9,
          Item: `${Tyfli01}`,
          name: "DAVID OUTWEAR COMFORTABLE DAILY SHOES",
          cost: "$ 69.95",
          currency: "USD",
        },

        {
          id: 10,
          Item: `${Tyfli02}`,
          name: "DAVID OUTWEAR SNAKE EMBOSSED DRESS SHOES",
          cost: "$ 69.95",
          currency: "USD",
        },

        {
          id: 11,
          Item: `${Tyfli03}`,
          name: "DAVID OUTWEAR OXFORD LEATHER SHOES",
          cost: "$ 69.95",
          currency: "USD",
        },

        {
          id: 14,
          Item: `${Tyfli04}`,
          name: "DAVID OUTWEAR CLASSIC LEATHER MOCCASINS",
          cost: "$ 59.95",
          currency: "USD",
        },
      ],  

      ButtonViewing: [
        {id: 1, name: "VIEW ALL"}
      ],      
    },
     
    foot: {
      infoMarket: {
        post: "support@davidoutwear.com",
        commentPost: "(for returns please contact us)",
        commentWorking: "SERVICE HOURS",
        working: "Monday-Friday 9.00 to 20.00"
      },

      infoEmail: {
        commentEmail: "Enter your email address to be the first to hear about new products and specials.",
        email: "Enter your email"
      },

      navigation: {
        item1: "FAQ",
        item2: "Contact Us",
        item3: "About Us",
        item4: "Track Order",
        item5: "Return Policy",
        item6: "Cancellation Policy",
        item7: "Terms of Service",
        item8: "Privacy Policy"
      },

      infoRights: {
        item1: "© 2021 David Outwear",
        item2: "David Outwear",
        item3: "All Rights Reserved."
      }
    }, 
  }
}

export default Store;