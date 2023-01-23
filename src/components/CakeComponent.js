import { useState } from "react";

const CakeComponent = ({cake}) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    // const newCake = {
    //     cakeName: cakeName,
    //     ingredients: ingredients,
    //     rating: rating
    // }
    const ingredientsList = cake.ingredients.map((ingredient) =>{
        return <li>{ingredient}</li>
    })

    

    return(
        <>
        <cakes/>
            <p>{cake.cakes}</p>
            <h3>{cake.cakeName}</h3>
            <h4>
                {cake.rating}
            </h4>
            <h4>
                ${cake.price}
            </h4>
           <ul>
            {/* {cake.ingredients} */}
            {ingredientsList}
           </ul>

        </>
    
    )
}
            
export default CakeComponent;