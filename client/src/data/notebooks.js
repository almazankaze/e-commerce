import macbook from "../img/notebooks/note_1.jpg";
import asus from "../img/notebooks/note_2.jpg";
import lenovo from "../img/notebooks/note_3.jpg";
import hp from "../img/notebooks/note_4.jpg";

export const notebooks = [
  {
    id: 1,
    name: "AppleMacbook Air 13",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
    img: macbook,
    dprice: "1200.00",
    oprice: "1550.00",
    percentOff: "",
    rating: 4,
    inStock: true,
  },
  {
    id: 2,
    name: "Asus Zenbook 14",
    desc: "description",
    img: asus,
    dprice: "37.00",
    oprice: "50.00",
    percentOff: "",
    rating: 5,
    inStock: false,
  },
  {
    id: 3,
    name: "Lenovo V15",
    desc: "description",
    img: lenovo,
    dprice: "37.00",
    oprice: "50.00",
    percentOff: "",
    rating: 4,
    inStock: true,
  },
  {
    id: 4,
    name: "HP 255 G7",
    desc: "description",
    img: hp,
    dprice: "37.00",
    oprice: "50.00",
    percentOff: "",
    rating: 4.5,
    inStock: true,
  },
];
