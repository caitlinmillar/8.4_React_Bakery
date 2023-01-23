import CakeComponent from "../components/CakeComponent";
import { useState } from "react";
// CONTAINERS HAVE STATE, LOGIC AND ENCLOSE THINGS
// COMPONENTS DO NOT HAVE STATE

const CakeContainer = ({cake}) => {
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
        
        /* FOUND A WAY TO RETURN ALL CAKES */
        const allCakes = cakes.map((cake) =>{
            return <CakeComponent cake={cake}/>
        })
       

    return(
        <>
        <section>
                {
                    cakes.map((cake, index) => {
                        return(
                            <div key={index}>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
        {allCakes}
        
        
        {/* cake is a new name for props */} 
        {/* <CakeComponent cake={cakes[0]}/>
        <CakeComponent cake={cakes[1]}/>
        <CakeComponent cake={cakes[2]}/> */}
        </>
        
    )
}

export default CakeContainer;
