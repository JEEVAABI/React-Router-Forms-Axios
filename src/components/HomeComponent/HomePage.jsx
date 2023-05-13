import React, { Component } from 'react'
import axios from 'axios'

export class HomePage extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/homePage')
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
      <div>HomePage</div>
    )
  }
}

export default HomePage