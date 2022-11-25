import React from "react";
import './Title.css'



function Title(props: any) {
    return (
        <h1>Blog Pessoal{props.nome}!</h1>
    );
}

export {Title}