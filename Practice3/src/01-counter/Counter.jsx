import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {

    const [valor, setValor] = useState(1);

    // let valor = 1;

    const sumaUno = () => {
        setValor(valor + 1);
        console.log(valor);
    };

    const restaUno = () => {
        setValor(valor - 1)
        console.log(valor);
    };

    const cero =  () => {
        setValor(0)
    };

    return (
        <>
            <h1>Counter</h1>
            <hr />
            <p className='col-2 mx-3'>{valor}</p>
            <button className="btn btn-primary col-2 mx-3" onClick={sumaUno}>+1</button>
            <button className="btn btn-primary col-2 mx-3" onClick={restaUno}>-1</button>
            <button className="btn btn-primary col-2 mx-3" onClick={cero}>0</button>
        </>
    )
};
