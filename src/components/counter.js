import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementAct, decrementAct} from '../actions/couterActions.js';


function Counter(){

    const count = useSelector((state) => {return state.counter});
    const num = useSelector((state) => {return state.form});
    const dispatch = useDispatch();
    return (
         <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {dispatch(incrementAct(num))}}>+</button>
            <button onClick={() => {dispatch(decrementAct(num))}}>-</button>
        </div>
    );
}

export default Counter;
