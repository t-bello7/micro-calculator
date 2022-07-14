import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';


function Calculator(){
    const [calcObj, setCalcObj] = useState({});

    const handleClick = (e) => {
        const newCalcObj = calculate(calcObj, (e.target.innerHTML).trim() );
        setCalcObj(newCalcObj);
    }
    return (
        <div className='container'>
            <h2>Let's do some Math!</h2>
            <span role="textbox"contentEditable className='calc-input' suppressContentEditableWarning={true}> {calcObj.next || calcObj.total || 0 }</span>
            <div className='calc-container'>
                <button className='btn btn-oper' type="button" onClick={handleClick}> AC </button>
                <button className='btn btn-oper' type="button" onClick={handleClick}> +/- </button>
                <button className='btn btn-oper' type="button" onClick={handleClick}>%</button>
                <button className='btn btn-calc' type="button" onClick={handleClick}>÷</button>
                <button className='btn' type="button" onClick={handleClick}>7</button>
                <button className='btn' type='button' onClick={handleClick}>8</button>
                <button className='btn' type='button' onClick={handleClick}>9</button>
                <button className='btn btn-calc' type='button' onClick={handleClick}>x</button>
                <button className='btn' type='button' onClick={handleClick}>4</button>
                <button className='btn' type='button' onClick={handleClick} >5</button>
                <button className='btn' type='button' onClick={handleClick} >6</button>
                <button className='btn btn-calc' type='button' onClick={handleClick} >-</button>
                <button className='btn' type='button' onClick={handleClick} >1</button>
                <button className='btn' type='button' onClick={handleClick} >2</button>
                <button className='btn' type='button' onClick={handleClick} >3</button>
                <button className='btn btn-calc' type='button' onClick={handleClick} >+</button>
                <button className='btn btn-zero' type='button' onClick={handleClick} >0</button>
                <button className='btn' type='button' onClick={handleClick} >.</button>
                <button className='btn btn-calc' type='button' onClick={handleClick} >=</button>
            </div>
        </div>
    )
}


export default Calculator;