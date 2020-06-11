import React, { useState } from 'react';
import './Room.css'

function Button() {
    let [isLit, setLit] = useState(false)
    // const lightness = isLit ? 'lit' : 'dark';
    let [age, setage] = useState(18)
    return (
        <div className={`room ${isLit? 'lit':'dark'}`}>
            <h2>Completing assignment 2 of react</h2><br /><br />

            <span>This room's light is {isLit? 'lit' : 'dark'}</span>



            <h3>The age of the person using this is {age}</h3><br />
            <button className='Light-on' onClick={() => {setLit(true)}}>Light on</button>
            <button className='light-off' onClick={() => {setLit(false)}}>light off</button>
            <br />
            <h4>Age Generator</h4>
            <button className='age-up' onClick={() => setage(++age)}>+</button>
            <button className='age-down' onClick={() => setage(--age)}>-</button>

        </div>


    );
}
export default Button;