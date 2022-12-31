import React, { useContext } from "react";
import { Context } from "../AppContext";
import Auxi from "../Auxi";
import ModalBackdrop from "./ModalBackdrop";


const FortyModal = React.memo((props) => {
    const { modalCard, modalShow, handleClose } =useContext(Context);

    return (
        <Auxi>
            <ModalBackdrop show={modalShow} clicked={handleClose} />
            <div
                className="modal"
                style={{
                    transform: modalShow ? "translateY(0)" : "translateY(-100vh)",
                    opacity: modalShow ? "1" : "0",
                }}
            >
                <img src={modalCard.image} alt={modalCard.name} className="forty-card" />
                <div className="modal__body">
                    <h2>{modalCard.name}</h2>
                    <hr />
                    <p><span>{modalCard.keywords}</span></p>
                    <hr />
                    <p>{modalCard.general}</p>
                </div>
                <button className="modal__close-button" onClick={handleClose}>&nbsp;</button> 
            </div>       
        </Auxi>

    );
});

export default FortyModal;