import React, { useContext } from "react";
import fortyJSON from "./Assets/fortyservants.json";
import { Context } from "./AppContext";
import FortyCard from "./Components/FortyCard";

// criando função para apresentar a suit de cartas dos 40 Servidores

const ExploreSuit = () => {
    const { displaySuit, showFortyModal } = useContext(Context);
    const forty = [...fortyJSON];

    // Caso o display de cartas esteja zerado

    if (displaySuit.length === 0) {
        return null;
    }

    return (
        <div className="row--center">
            <h2>{displaySuit.name}</h2>
            {forty.slice(displaySuit.min, displaySuit.max).map((card) => (
                <FortyCard
                    key={card.id}
                    className="forty-card"
                    src={card.image}
                    alt={card.name}
                    value={card.id}
                    onClick={() => showFortyModal(card)}
                />
            ))}
        </div>
    );
};

export default ExploreSuit;