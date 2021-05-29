import React from 'react';
import Menu from './menu.js';
import Counter from './counter.js';

class Header extends React.Component{

    render(){
        return (
            <div>
                <header className="_header">
                    <h1>{this.props.name}</h1>
                    <Menu links={this.props.links}></Menu>
                    
                </header>
                <Counter />
            </div>
        );
    }
}
export default Header;
