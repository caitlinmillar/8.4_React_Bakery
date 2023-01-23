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
        return <li>{ingredients}</li>
    })

    

    return(
        <>
        <cakes/>
            {cake.cakes}
            <h3>{cake.cakeName}</h3>
           <ul>
            {ingredientsList}
           </ul>

        </>
    
    )
}
            
export default CakeComponent;