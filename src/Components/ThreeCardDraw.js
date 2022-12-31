import React, { useState, useEffect, useContext } from "react";
import { Context } from "../AppContext";
import FortyCard from "./FortyCard";

// criando estrutura web para a tiragem de três cartas

const ThreeCardDraw = () => {
    const { showTCD, fortyDeck, showFortyModal } = useContext(Context);
    const [td, setTD] = useState(fortyDeck);

    useEffect(() => {
        setTD(fortyDeck);
    }, [fortyDeck]);

    // retorna null caso não for mostrar a tela de três cartas

    if (!showTCD) {
        return null;
    }

    return (
        <div className="container">
            <div className="row row--cards">
                {td.slice(0, 3).map((forty, i) => (
                    <FortyCard 
                        key={forty.id}
                        className="forty-card"
                        src={forty.image}
                        alt={forty.name}
                        delay={i}
                        value={forty.id}
                        onClick={() => showFortyModal(forty)}
                    />
                ))}
            </div>
            <div className="row row--reading animated fadeIn delay-3s slower">
                <p>
                    <span>O Passado:</span> ({fortyDeck[0].name}) {fortyDeck[0].past}
                </p>
                <p>
                    <span>O Presente:</span> ({fortyDeck[1].name}) {fortyDeck[1].present}
                </p>
                <p>
                    <span>O Futuro:</span> ({fortyDeck[2].name}) {fortyDeck[2].future}
                </p>
            </div>
        </div>
    );

};

export default ThreeCardDraw;

