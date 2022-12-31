import React from "react";

// criando botão a ser usado no cabeçalho

const Button = props => {
    return (
        <button className={props.classes} onClick={props.onClick}>
        {props.name}
        </button>
    );    
    
}

export default Button;

