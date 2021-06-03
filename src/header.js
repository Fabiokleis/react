import React from 'react';
import Menu from './menu.js';
import Counter from './counter.js';

function Header(props){

        return (
            <div>
                <header className="_header">
                    <h1>{props.name}</h1>
                    <Menu links={props.links}></Menu>
                    
                </header>
                <Counter />
            </div>
        );
}


export default Header;
