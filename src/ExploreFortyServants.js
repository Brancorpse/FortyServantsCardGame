import React, { useContext } from "react";
import exploreJSON from "./Assets/explorefortyservants.json";
import Button from "./Components/Button";
import { Context } from "./AppContext";
import ExploreSuit from "./ExploreSuit";

// criando botão para explorar os 40 Servidores

const ExploreFortyServants = () => {
    const { showEFF, setDisplaySuit } = useContext(Context);
    const exploreData = exploreJSON;

    if (!showEFF) {
        return null;
    }

    // criando botão

    return (
        <div className="container">
            <div className="row--center">
                {exploreData.map((data, i) => (
                    <Button
                        classes="button"
                        onClick={() => setDisplaySuit(exploreData[data.id])}
                        name={data.name}
                        key={i}
                    />    
                ))}
            </div>
            <ExploreSuit />

        </div>
    );
};

export default ExploreFortyServants;

