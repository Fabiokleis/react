import React from 'react';

function Counter(){
    const [ count, setCounter ] = React.useState(1);

    function add(){
        setCounter(count + 1);
    }

    React.useEffect(() => {
        if (localStorage.getItem("count")){
            setCounter(parseInt(localStorage.getItem("count")));
        }       
    }, []);

    React.useEffect(() => {
        localStorage.setItem("count", count);
        document.querySelector("h1").innerText = count;
    }, [count]);

    return (
         <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    );
}

/*
class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = { count: this.props.count};
        this.add = this.add.bind(this);
    }
    
    add(){
        // this.setState({count: this.state.count + 1});
        this.setState((state) => { return {count: state.count + 1 }},
        () => {
            console.log(this.state);   
            localStorage.setItem("state", JSON.stringify(this.state));
        });
    }
    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('state')));
    }
    render(){
        return (
        <div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.add}>add</button>
        </div>
        );
    }
}
*/
export default Counter;
