import React, { Component } from 'react'
import axios from 'axios'
export class ContactPage extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/contactusPage')
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
      <div>ContactPage</div>
    )
  }
}

export default ContactPage