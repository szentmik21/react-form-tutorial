import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.onFormInputChange = this.onFormInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  onFormSubmit(event) {
    event.preventDefault();
    alert("Name: " + this.state.firstName + " was submitted!");
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }
  render() {
    return (
      <div className="container">
        <div className="form-input">
          <Form 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            formChange={this.onFormInputChange}
            formSubmit={this.onFormSubmit}
          />
        </div>
        <div className="form-output">
          <h1>Output</h1>
          <p>First name: {this.state.firstName} </p>
          <p>Last name: {this.state.lastName} </p>
          <p>Email: {this.state.email} </p>
          <p>Password: {this.state.password} </p>
        </div>
      </div>
    );
  }
}

export default App;

// export default ({ name }) => <h1>Hello {name}!</h1>;
