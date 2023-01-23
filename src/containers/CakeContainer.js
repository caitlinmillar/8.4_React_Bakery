import CakeComponent from "../components/CakeComponent";
import { useState } from "react";


const CakeContainer = () => {
    const [cakes, setCakes] = useState([
    {
    cakeName: "Victoria Sponge",
    ingredients: [
        "eggs",
       "butter",
       "sugar",
       "self-raising flour",
       "baking powder",
       "milk"
   ],
   price: 5,
    rating: 5
},
{
  cakeName: "Tea Loaf",
    ingredients: [
        "eggs",
       "oil",
       "dried fruit",
       "sugar",
       "self-raising flour",
       "strong tea",
   ],
   price: 2,
   rating: 3
 },
 {
    cakeName: "Carrot Cake",
        ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
        ],
    price: 8,
    rating: 5
    }
    ]);

    return(
        <>
        <CakeComponent cakes={cakes[0]}/>
        <CakeComponent cakes={cakes[1]}/>
        <CakeComponent cakes={cakes[2]}/>
        </>
    )
}

export default CakeContainer;
