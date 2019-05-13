import React, {Component} from 'react';

import  './counter.scss'
import Delta from './Delta'

class Calcu extends Component {
    state = {
        value : 0,
        delta : 1,
        delta2 :1
    };

    render() {
        let {value, delta, delta2} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <Delta delta = {delta} delta2 = {delta2}
                       handleChange = {this.handleChange} handleChangeDelta2={this.handleChangeDelta2}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMulti}>*</button>
                <button onClick={this.handleDiv}>/</button>
            </div>
        );
    }

    handlePlus = () => {
        this.setState({
            value : this.state.delta + this.state.delta2
        })
    };
    handleMinus = () => {
        this.setState({
            value : this.state.delta - this.state.delta2
        })
    };
    handleMulti = () => {
        this.setState({
            value : this.state.delta * this.state.delta2
        })
    };
    handleDiv = () => {
        this.setState({
            value : this.state.delta / this.state.delta2
        })
    };
    handleChange = event => this.setState({
        delta : parseInt(event.target.value)
    });
    handleChangeDelta2 = event => this.setState({
        delta2 : parseInt(event.target.value)
    });
}

export default Calcu;