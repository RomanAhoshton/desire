import { v4 as uuid } from "uuid";
import { chairs, sofa, table,HomeSlides } from "../images";

export const HomeSliderData = [
  {
 
    link: HomeSlides.one,
    id: uuid(),
  },
  {
   
    link: HomeSlides.two,
    id: uuid(),
  },
  {
  
    link: HomeSlides.three,
    id: uuid(),
  },
  {

    link: HomeSlides.four,
    id: uuid(),
  },

];

export const Goods = [
  {
    type: "Chairs",
    link: chairs.one,
    id: uuid(),
    price: 150, // USD
  },
  {
    type: "Chairs",
    link: chairs.two,
    id: uuid(),
    price: 200, // USD
  },
  {
    type: "Chairs",
    link: chairs.three,
    id: uuid(),
    price: 180, // USD
  },
  {
    type: "Chairs",
    link: chairs.four,
    id: uuid(),
    price: 250, // USD
  },
  {
    type: "Chairs",
    link: chairs.five,
    id: uuid(),
    price: 220, // USD
  },
  {
    type: "Sofa",
    link: sofa.one,
    id: uuid(),
    price: 500, // USD
  },
  {
    type: "Sofa",
    link: sofa.two,
    id: uuid(),
    price: 450, // USD
  },
  {
    type: "Sofa",
    link: sofa.three,
    id: uuid(),
    price: 600, // USD
  },
  {
    type: "Sofa",
    link: sofa.four,
    id: uuid(),
    price: 550, // USD
  },
  {
    type: "Sofa",
    link: sofa.five,
    id: uuid(),
    price: 480, // USD
  },
  {
    type: "Table",
    link: table.one,
    id: uuid(),
    price: 300, // USD
  },
  {
    type: "Table",
    link: table.two,
    id: uuid(),
    price: 350, // USD
  },
  {
    type: "Table",
    link: table.three,
    id: uuid(),
    price: 320, // USD
  },
  {
    type: "Table",
    link: table.four,
    id: uuid(),
    price: 380, // USD
  },
  {
    type: "Table",
    link: table.five,
    id: uuid(),
    price: 400, // USD
  },
];
