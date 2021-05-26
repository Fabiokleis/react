import React from 'react';
import Menu from './menu.js';

function Header(props){
    return (
        <header className="_header">
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
            </header>
    );
}

export default Header;
