import Cakes from "../components/Cakes";
import CakeComponent from "../components/CakeComponent";
import { useState } from "react";


const CakeContainer = () => {
    const cakes = useState[{
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
]


        
    // const ref = useRef(CakeList)
    // const [teaLoaf, setTeaLoaf] = useState[0];
    // const [carrotCake, setCarrotCake] = useState[0];


    return(
        <>
        <Cakes cakes={cakes}/>  
        
        {Cakes}
        {CakeComponent.Cake}


        </>
    )
}

export default CakeContainer;
