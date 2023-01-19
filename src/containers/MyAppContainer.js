import { useState } from "react";
import CakeList from "../components/CakeList";

const MyAppContainer = () => {

    const [victoriaCake, setVictoriaCake] = useState[0];
    const [teaLoaf, setTeaLoaf] = useState[0];
    const [carrotCake, setCarrotCake] = useState[0];

    return(
        <>
            <h1>Cakes</h1>
            <CakeList title={"Victoria Cake"}/>
            <CakeList title={"Tea Loaf"}/>
            <CakeList title={"CarrotCake"}/>
        </>
    )
}

export default MyAppContainer;
