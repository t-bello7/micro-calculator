import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { calcObj: {}}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        const newCalcObj = calculate(this.state.calcObj, e.target.innerHTML )
        this.setState({calcObj: {...newCalcObj}})
    }
    componentDidMount() {
        this.setState( prevState => ({
            calcObj :{
                total: 0
            }
        }));
    }
    render(){
        return (
            <>
                <span role="textbox"contentEditable className='calc-input' suppressContentEditableWarning={true}> {this.state.calcObj.total}</span>
                <div className='calc-container'>
                    <button className='btn btn-oper' type="button" onClick={this.handleClick}> AC </button>
                    <button className='btn btn-oper' type="button" onClick={this.handleClick}> +/- </button>
                    <button className='btn btn-oper' type="button" onClick={this.handleClick}>%</button>
                    <button className='btn btn-calc' type="button" onClick={this.handleClick}>÷</button>
                    <button className='btn' type="button" onClick={this.handleClick}>7</button>
                    <button className='btn' type='button' onClick={this.handleClick}>8</button>
                    <button className='btn' type='button' onClick={this.handleClick}>9</button>
                    <button className='btn btn-calc' type='button' onClick={this.handleClick}>x</button>
                    <button className='btn' type='button' onClick={this.handleClick}>4</button>
                    <button className='btn' type='button' onClick={this.handleClick} >5</button>
                    <button className='btn' type='button' onClick={this.handleClick} >6</button>
                    <button className='btn btn-calc' type='button' onClick={this.handleClick} >-</button>
                    <button className='btn' type='button' onClick={this.handleClick} >1</button>
                    <button className='btn' type='button' onClick={this.handleClick} >2</button>
                    <button className='btn' type='button' onClick={this.handleClick} >3</button>
                    <button className='btn btn-calc' type='button' onClick={this.handleClick} >+</button>
                    <button className='btn btn-zero' type='button' onClick={this.handleClick} >0</button>
                    <button className='btn' type='button' onClick={this.handleClick} >.</button>
                    <button className='btn btn-calc' type='button' onClick={this.handleClick} >=</button>
            </div>
            </>
        )
    }
}

export default Calculator;