import { useState } from "react";

const CakeComponent = ({cakes}) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    // const newCake = {
    //     cakeName: cakeName,
    //     ingredients: ingredients,
    //     rating: rating
    // }

    // const cakeComps = cakes.map((cakes,index) => {
    //     return <cakes key={index} Cake={cakes}/>
    // })

    return(
        <>
        <cakes/>
            {CakeComponent}

            
           

        </>
    
    )
}
            
export default CakeComponent;