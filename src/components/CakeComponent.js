import { useState } from "react";

const CakeComponent = ({cake}) => {
    // const ingredientsList = cake.ingredients.map((ingredient) =>{
    //     return <li>{ingredient}</li>
    // })

    return(
    <>
        <section className="cakeCard">
            <h2>{cake.cakeName}</h2>
            <ul>
                {cake.ingredients}
            </ul>
            <h4 className="rating">
                rating is {cake.rating}
            </h4>
            <h4 className="price">
                price is £{cake.price}.00
            </h4>
        </section>
    </>
    
    )
}
            
export default CakeComponent;