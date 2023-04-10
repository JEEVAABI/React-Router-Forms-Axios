import React, { Component } from 'react'

export class Calcula extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input1: '',
          input2: '',
          operator: '+',
          result: '',
        };
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInput1(event) {
        this.setState({ input1: event.target.value });
      }
    
      handleInput2(event) {
        this.setState({ input2: event.target.value });
      }
    
      handleOperator(event) {
        this.setState({ operator: event.target.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const { input1, input2, operator } = this.state;
        let result;
        switch (operator) {
          case '+':
            result = parseInt(input1) + parseInt(input2);
            break;
          case '-':
            result = parseInt(input1) - parseInt(input2);
            break;
          case '*':
            result = parseInt(input1) * parseInt(input2);
            break;
          case '/':
            result = parseInt(input1) / parseInt(input2);
            break;
          default:
            result = '';
        }
        this.setState({ result });
      }
    
      render() {
        return (
          <div>
            <h1>Basic Calculator</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="number" value={this.state.input1} onChange={this.handleInput1} />
              <select value={this.state.operator} onChange={this.handleOperator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
              <input type="number" value={this.state.input2} onChange={this.handleInput2} />
              <button type="submit">Calculate</button>
            </form>
            <p>Result: {this.state.result}</p>
          </div>
        )
    
  }
}

export default Calcula