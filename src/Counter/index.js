import React, {Component} from 'react';

import  './counter.scss'

class Counter extends Component {
    state = {
        value : 0,
        delta : 1
    };

    render() {
        let {value, delta} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <div>
                    <input value={delta} onChange={this.handleChange}/>
                </div>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>

            </div>
        );
    }

    handlePlus = () => {
        this.setState({
            value : this.state.value + this.state.delta
        })
    };
    handleMinus = () => {
        this.setState({
            value : this.state.value - this.state.delta
        })
    };
    handleChange = event => this.setState({
       delta : parseInt(event.target.value)
    });
}

export default Counter;