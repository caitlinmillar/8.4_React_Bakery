import { useState } from "react";
import CakeList from "../components/CakeList";

const MyAppContainer = () => {

    // const [victoriaCake, setVictoriaCake] = useState[0];
    // const [teaLoaf, setTeaLoaf] = useState[0];
    // const [carrotCake, setCarrotCake] = useState[0];

    return(
        <>
            <h1>Cakes</h1>
            <CakeList name={"Victoria Sponge"}/>
            <CakeList name={"Tea Load"}/>
            <CakeList name={"Carrot Cake"}/>
        </>
    )
}

export default MyAppContainer;
