import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementAct, decrementAct} from '../actions/couterActions.js';


function Counter(){

    const count = useSelector((state) => {return state});
    const dispatch = useDispatch();

/*
    const [ count, setCounter ] = useState(1);

    function add(){
        setCounter(count + 1);
    }

    useEffect(() => {
        if (localStorage.getItem("count")){
            setCounter(parseInt(localStorage.getItem("count")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("count", count);
        document.querySelector("h1").innerText = count;
    }, [count]);
*/
    return (
         <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {dispatch(incrementAct(2))}}>+</button>
            <button onClick={() => {dispatch(decrementAct(3))}}>-</button>
        </div>
    );
}

export default Counter;
