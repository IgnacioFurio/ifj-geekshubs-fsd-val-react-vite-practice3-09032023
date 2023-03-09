import React, { useState } from 'react';
import './UserForm.css';

export const UserForm = () => {

    let user = {
        username: "",
        email: ""
    };

    const [valor, setValor] = useState(user);
    const {userName, email} = valor;

    console.log(valor);


    const newValue = ({target})  => {
        
        console.log(valor);

            const {name, value} = target; 
        setValor(
            {
                ...valor,
                [name]:value
                
            }
        );
        // console.log(value);

        // console.log(userName);
        // console.log(email);
    };

    return (
        <>
        <h1>UserForm</h1>
        <hr />
        <input type="text" 
            name="username" 
            placeholder='username' 
            value={userName}
            onChange={newValue}/>
        <input type="text" 
            name="email" 
            placeholder='email' 
            value={email}
            onChange={newValue}/>            
        </>
    )
};
