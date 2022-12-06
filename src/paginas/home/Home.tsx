import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeClicks } from "../../store/clicks/actions";
import { clicksState } from "../../store/clicks/clicksReducer";
import './Home.css';

function Home() {
    const num = useSelector<clicksState, clicksState['clicks']>(
        (state) => state.clicks
    );// esta váriavel ele retorna um vetor com duas informações, que trás todas as informações do vetor e toda função
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = `Clicou ${num} vezes`;

        if (num > 10) {
            navigate('/about');
            //Redirecionar
        }

        return () => {

        } //Só acessa o return quando está na fase unmount
    }, [num]);

    return (
        <>
            <h1>Vc clicou {num} vezes</h1>
            <button onClick={() => dispatch(changeClicks(num + 1))}>
                +
            </button>
            <button onClick={() => dispatch(changeClicks(num - 1))}>
                -
            </button>
        </>
    );
}

export { Home };
