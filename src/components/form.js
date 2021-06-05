import React from 'react';
import {setNum} from '../actions/formAction.js';
import {useDispatch} from 'react-redux';

export default function Form(){
    const dispatch = useDispatch();

    function handleChange(e){
        dispatch(setNum(parseInt(e.target.value)));
    }


    return (
        <div>  
            <form>
                <input type='number' onChange={(e) => { return handleChange(e)}} ></input>
            </form>
        </div>
    );
}
