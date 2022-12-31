import React, { useContext } from "react";
import { Context } from "../AppContext";
import FortyCard from "./FortyCard";

// criando tela da função Sim/Não

const YesNoAnswer = () => {
    const { showYNA, fortyDeck, userQuestion, showFortyModal } = useContext(Context);

    if (!showYNA) {
        return null;
    }

    return (
        <div className="container">
            <div className="row row--answer">
                <FortyCard 
                    src={fortyDeck[0].image}
                    alt={fortyDeck[0].name}
                    delay={0}
                    value={fortyDeck[0].id}
                    onClick={() => showFortyModal(fortyDeck[0])}
                />
                <div className="forty-read animated fadeIn delay-1s slower">
                    <p>Sua Resposta: <em>{userQuestion}</em></p>
                    <hr />
                    <p>{fortyDeck[0].yesno}</p>
                </div>
            </div>
        </div>
    );

};

export default YesNoAnswer;