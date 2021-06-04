import React from 'react';
import Menu from './menu.js';
import {useSelector} from 'react-redux';

function Header(props){
    
    const counter = useSelector((state) => {return state});

    return (
        <div>
            <header className="_header">
                <h1>{counter}</h1>
                <Menu />
            </header>
        </div>
    );
}


export default Header;
