import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "March 30, 2019",
      newDeadline: ""
    }
  }
    changeDeadline(){
      this.setState({deadline: this.state.newDeadline});
    }
  render() {
    return (
      <div className="App">
        <p className="App-title">Countdown to {this.state.deadline}</p>
       <Clock 
        deadline = {this.state.deadline}
       />
      <Form inline>
          <FormControl 
              className="Deadline-input"
              placeholder="new date" 
              onChange={event => this.setState({newDeadline : event.target.value})}></FormControl>
          <Button onClick={()=> this.changeDeadline()}>Submit</Button>
      </Form>  
      </div>
    );
  }
}

export default App;
