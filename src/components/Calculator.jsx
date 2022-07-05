import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
                <span role="textbox"contentEditable className='calc-input'> </span>
                <div className='calc-container'>
                    <button className='btn btn-oper' type="button">AC</button>
                    <button className='btn btn-oper' type="button"> +/- </button>
                    <button className='btn btn-oper' type="button">%</button>
                    <button className='btn btn-calc' type="button">/</button>
                    <button className='btn' type="button">7</button>
                    <button className='btn' type='button'>8</button>
                    <button className='btn' type='button'>9</button>
                    <button className='btn btn-calc' type='button'>X</button>
                    <button className='btn' type='button'>4</button>
                    <button className='btn' type='button'>5</button>
                    <button className='btn' type='button'>6</button>
                    <button className='btn btn-calc' type='button'>-</button>
                    <button className='btn' type='button'>1</button>
                    <button className='btn' type='button'>2</button>
                    <button className='btn' type='button'>3</button>
                    <button className='btn btn-calc' type='button'>+</button>
                    <button className='btn btn-zero' type='button'>0</button>
                    <button className='btn' type='button'>.</button>
                    <button className='btn btn-calc' type='button'>=</button>
            </div>
            </>
        )
    }
}

export default Calculator;