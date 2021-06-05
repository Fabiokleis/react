import React from 'react';
import Menu from './menu.js';
import {useSelector} from 'react-redux';
import Form from './form.js';

function Header(props){
    
    const counter = useSelector((state) => {return state.counter});
    const num = useSelector((state) => {return state.form});
    return (
        <div>
            <header className="_header">
                <h1>{counter}</h1>
                <h2>{num}</h2>
                <Menu />

            </header>
            <Form />
        </div>
    );
}


export default Header;
