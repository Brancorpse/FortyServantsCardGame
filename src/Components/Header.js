import React, { useContext, UseContext } from "react";
import Button from "./Button";
import { Context } from "../AppContext";

// criando cabeçalho da página

const Header = () => {
    const { threeCardDraw, yesNoQuestion, exploreFortyServants } =useContext(Context);

    return (
        <div className="hero">
            <h1 className="hero_title">Leitura dos Quarenta Servidores <img src="images/fortyservants.JPG" width="80" height="50"></img> </h1>
            <Button classes="button" name="Passado, Presente e Futuro" onClick={threeCardDraw} />
            <Button classes="button" name="Pergunta Sim/Não" onClick={yesNoQuestion} />
            <Button classes="button" name="Explore os Quarenta Servidores" onClick={exploreFortyServants} />
        </div>
    );

};

export default Header;