import React, { useState } from "react";
import fortyJSON from "./Assets/fortyservants.json";

// Criando algoritmo para realizar o embaralhar, tiragem de três cartas e respota SIM/NÃO

const Context = React.createContext({});

const Provider = ({ children }) => {
    const [fortyDeck, setFortyDeck] = useState([...fortyJSON]);
    const [showTCD, setShowTCD] = useState(false);
    const [showYNQ, setShowYNQ] = useState(false);
    const [showYNA, setShowYNA] = useState(false);
    const [showEFF, setShowEFF] = useState(false);
    const [userQuestion, setUserQuestion] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalCard, setModalCard] = useState([]);
    const [displaySuit, setDisplaySuit] = useState([]);

    // função usando random para embaralhar

    const shuffle = array => {
        let i = 0;
        let j = 0;
        let temp = null;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array [i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    // função para executar tiragem de três cartas

    const threeCardDraw = () => {
        setFortyDeck(shuffle(fortyDeck));
        if (showTCD === false) {
            setShowYNQ(false);
            setShowYNA(false);
            setShowEFF(false);
            setShowTCD(true);

        } else {
            setShowTCD(false);
            setTimeout(() => { // setando falso para fazer um re-render
                setShowTCD(true)
            }, 0);
        };
    };

    // função para executar a pergunta da tiragem SIM/NÃO

    const yesNoQuestion = () => {
        setFortyDeck(shuffle(fortyDeck));
        setUserQuestion("");
        setShowTCD(false);
        setShowYNA(false);
        setShowEFF(false);
        setShowYNQ(true);
    };

    // função para executar a resposta da tiragem SIM/NÃO

    const yesNoAnswer = () => { 
        setShowTCD(false);
        setShowYNQ(false);        
        setShowEFF(false);
        setShowYNA(true);

    };

    const handleInputChange = event => setUserQuestion(event.target.value);

    // função para explorar os Quarenta Servidores

    const exploreFortyServants = () => {
        setShowTCD(false);
        setShowYNQ(false);        
        setShowYNA(false);
        setShowEFF(true);

    };

    const handleClose = () => setModalShow(false);
    
    const handleShow = () => setModalShow(true);

    const showFortyModal = displaycard => {
        setModalCard(displaycard);
        handleShow();
    };

    // retornando valores

    return (
        <Context.Provider
                value={{
                    fortyDeck,
                    showTCD,
                    showYNQ,
                    showYNA,
                    showEFF,
                    userQuestion,
                    modalShow,
                    modalCard,
                    displaySuit,
                    setDisplaySuit,
                    threeCardDraw,
                    yesNoQuestion,
                    yesNoAnswer,
                    handleInputChange,
                    exploreFortyServants,
                    handleClose,
                    handleShow,
                    showFortyModal
                }}
        >
            {children}
        </Context.Provider>        

    );
    

};

export { Context, Provider };