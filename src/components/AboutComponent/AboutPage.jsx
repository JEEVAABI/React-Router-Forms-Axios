import React, { Component } from 'react'
import axios from 'axios'

export class AboutPage extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/aboutusPage')
          .then(response => {
            console.log(response.data);
            
          })
          .catch(error => {
            console.log(error);
          });
      }
  render() {
    return (
      <div>AboutPage</div>
    )
  }
}

export default AboutPage