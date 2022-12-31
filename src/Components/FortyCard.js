import React from "react";

// criando componentede imagem para mostrar carta

const FortyCard = props => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className={
                props.delay || props.delay === 0
                    ? "forty-card animated flipInY delay-" + props.delay + "s"
                    : "forty-card animated fadeIn"
            }
            value={props.id}
            onClick={props.onClick}
        />
    );        

};

export default FortyCard;