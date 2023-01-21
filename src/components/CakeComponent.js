import Cake from "./Cakes";

const CakeComponent = (cakes) => {
   
    return(
        <>
        <cakes/>
            {/* <h2>{}</h2> */}
            {/* <p>{CakeList.cakeName}</p>
            <p>Ingredients: {CakeList.ingredients}</p>
            <h3>Price is {CakeList.price}</h3>
            <h3>Rating is {CakeList.rating}</h3> */}
           
            {cakes.cakeName}
    
            <p>{cakes.cakeName}</p>


        </>
    
    )
        }
            
        



export default CakeComponent;