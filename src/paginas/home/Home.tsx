import React, { useState } from "react";
import './Home.css';

function Home () {
    const [num, setNum] = useState(0); // esta váriavel ele retorna um vetor com duas informações, que trás todas as informações do vetor e toda função
    
    return (
        <>
            <h1>Vc clicou {num} vezes</h1>
            <button onClick={()=> setNum(num + 1)}>
            clique aqui
            </button>
            <button onClick={()=> setNum(num - 1)}>
            clique aqui
            </button>
        </>
    );
}

export { Home };
