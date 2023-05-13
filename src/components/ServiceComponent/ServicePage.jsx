import axios from 'axios'
import React, { Component } from 'react'

export class ServicePage extends Component {
  constructor(props){
    super(props)
    this.state = {
        nameOfService:'',
        priceOfService:'',
        durationOfService:'',
        
    }
}
nameChangeHandler= event => {
    this.setState({
        nameOfService:event.target.value
    })
}
priceChangeHandler=event =>{
    this.setState({
        priceOfService:event.target.value
    })
}
durationChangeHandler=event =>{
    this.setState({
        durationOfService:event.target.value
    })
}

formChangeHandler = (event) => {
    event.preventDefault();
    const { nameOfService, priceOfService, durationOfService } = this.state;
    alert(`Service Name: ${nameOfService}\nService Price: ${priceOfService}\nServiceDuration: ${durationOfService}\n`);
    
    axios
        .post('http://localhost:3000/servicePage', this.state)
        //
        .then(response => {
            console.log(response)
            
    })
    .catch(error => {
        console.log(error)
        

    })
}

render() {
const {nameOfService,priceOfService,durationOfService} = this.state;
return (

    <form onSubmit={this.formChangeHandler}>
        <div>
        <label>Service Name: </label>
        <input type = 'text' value={nameOfService} onChange={this.nameChangeHandler}/>
        </div>

        <div>
        <label>Service Price:</label>
        <input type = 'text' pattern='\d+' value={priceOfService} onChange={this.priceChangeHandler}/>
        </div>


        <div>
        <label >Service duration</label>
            <select value={durationOfService} onChange={this.durationChangeHandler}>
                <option value="less than One Month">less than One Month </option>
                <option value="One Month">One Month</option>
                <option value="Two Month">Two Month</option>
                <option value="three Month">three Month</option>
                <option value="our Month">Four Month</option>
                <option value="Five Month">Five Month</option>
            </select>
        </div>

        <div>
            <button type="submit">submit</button>
        </div>
    </form>
)
}
}

export default ServicePage


