import React, { useContext } from "react";
import Button from "./Button";
import { Context } from "../AppContext";

// criando tela da função Sim/Não

const YesNoQuestion = () => {
    const  { showYNQ, handleInputChange, userQuestion, yesNoAnswer } = useContext(Context);

    if (!showYNQ) {
        return null;
    }

    return (
        <div className="container">
            <div className="row-center">
                <input
                    autoFocus
                    className="input input--question"
                    placeholder="Entre sua Questão Sim/Não..."
                    aria-label="Pergunta do Usuário"
                    aria-describedby="Input do Usuário"
                    value={userQuestion}
                    onChange={handleInputChange}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            yesNoAnswer()
                        }
                    }}
                />
                <Button
                    classes="button button--submit"
                    name="Enviar"
                    onClick={yesNoAnswer}
                />

            </div>
        </div>
    );

};

export default YesNoQuestion;