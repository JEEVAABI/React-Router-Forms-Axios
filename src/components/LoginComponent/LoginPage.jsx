import React, { Component } from 'react'
import axios from 'axios'

export class LoginPage extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/loginPage')
          .then(response => {
            console.log(response.data);
            // Do something with the data
          })
          .catch(error => {
            console.log(error);
          });
      }
  render() {
    return (
      <div>LoginPage</div>
    )
  }
}

export default LoginPage