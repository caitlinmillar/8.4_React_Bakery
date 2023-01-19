
const CakeList = ({cakeName, ingredients, price, rating}) => {
    // Victora Sponge
const victoria ={
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
}

// Tea Loaf
const teaLoaf ={
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
}

// Carrot Cake
const carrotCake ={
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


    return(
        <>
            <h2>{cakeName}</h2>
            <p>Ingredients: {ingredients}</p>
            <h3>Price is {price}</h3>
            <h3>Rating is {rating}</h3>
        </>
    )
}
export default CakeList;