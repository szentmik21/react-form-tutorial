import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }
  
  inputChangeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.props.setFormState(name, value);
  }

  formSubmitHandler(event) {
    event.preventDefault();
    alert("Name: " + this.props.firstName + " was submitted!");
    this.props.clearFormState();
  }

  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form onSubmit={this.formSubmitHandler}>
            <label>First name:
              <input 
                id="firstnameInput"
                name="firstName"
                onChange={this.inputChangeHandler}
                value={this.props.firstName}>
              </input>
            </label>
            <label>Last name:
              <input 
                id="lastnameInput"
                name="lastName"
                onChange={this.inputChangeHandler}
                value={this.props.lastName}>
              </input>
            </label>
            <label>Email:
              <input 
                id="emailInput"
                name="email"
                onChange={this.inputChangeHandler}
                value={this.props.email}>
              </input>
            </label>
            <label>Password:
              <input 
                id="passwordInput"
                name="password"
                onChange={this.inputChangeHandler}
                value={this.props.password}>
              </input>
            </label>
            
            <input type="submit" />
          </form>
        </div>
        <div className="form-output">
          <h1>Output</h1>
          <p>First name: {this.props.firstName} </p>
          <p>Last name: {this.props.lastName} </p>
          <p>Email: {this.props.email} </p>
          <p>Password: {this.props.password} </p>
        </div>
      </div>
    )
  }
}

export default Form