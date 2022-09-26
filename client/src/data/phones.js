import moto from "../img/phones/phone_1.jpg";
import iphone from "../img/phones/phone_2.jpg";
import samsung from "../img/phones/phone_3.jpg";
import nokia from "../img/phones/phone_4.jpg";

export const phones = [
  {
    id: 1,
    name: "Moto e7i Power",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
    img: moto,
    dprice: "1200.00",
    oprice: "1550.00",
    percentOff: "",
    rating: 4,
    inStock: true,
  },
  {
    id: 2,
    name: "iPhone 12 mini",
    desc: "description",
    img: iphone,
    dprice: "37.00",
    oprice: "50.00",
    percentOff: "",
    rating: 5,
    inStock: false,
  },
  {
    id: 3,
    name: "Samsung A12",
    desc: "description",
    img: samsung,
    dprice: "37.00",
    oprice: "50.00",
    percentOff: "",
    rating: 4,
    inStock: true,
  },
  {
    id: 4,
    name: "Nokia 5.4",
    desc: "description",
    img: nokia,
    dprice: "37.00",
    oprice: "50.00",
    percentOff: "",
    rating: 4.5,
    inStock: true,
  },
];
