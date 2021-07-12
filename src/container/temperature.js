import React, { Component } from 'react';
import Input from '../component/input';

class Temperature extends Component {
    constructor() {
        super();
        this.state = {
            celcius: 4,
            fahrenheit: 32
        }
    }

    handleChange = (type, e) => {
        let c = e.target.value;
        let f = e.target.value;
        if (e.target.value) {
            if (type == 'Celcius') {
                f = this.cToF(e.target.value);
            }
            else {
                c = this.fToC(e.target.value);
            }
        }
        this.setState({
            celcius: c, fahrenheit: f
        })
    }

    cToF(celsius) {
        var cTemp = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        return cToFahr;
    }

    fToC(fahrenheit) {
        var fTemp = fahrenheit;
        var fToCel = (fTemp - 32) * 5 / 9;
        return fToCel;
    }

    render() {
        return (
            <div>
                <Input value={this.state.celcius} label={'Celcius'} action={this.handleChange} satya={'she is bewkoof'} />
                <Input value={this.state.fahrenheit} label={'Fahrenheit'} action={this.handleChange} />
            </div>
        )
    }
}

export default Temperature;