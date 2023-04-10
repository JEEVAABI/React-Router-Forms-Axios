import axios from 'axios'
import React, { Component } from 'react'

export class GetComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           posts : [],
           errorMessage:'',
        }
    }
    componentDidMount()
    {
        axios
            .get('https://rickandmortyapi.com/api')
            //
            .then(response => {
                console.log(response)
                this.setState({posts :response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retiving data'})
            

        })

        }
    
  render() {
    const {posts ,errorMessage} = this.state
    return (
    <React.Fragment>
      <div>Rick AND Morty</div>
      <div>
        
        {posts.length 
        ? posts.map( posts => <div key = {posts.id}> {posts.title} </div> )
        : null }
        {errorMessage ? <div>{errorMessage}</div> : null}

      </div>
    </React.Fragment>
    )
  }
}



export default GetComponent