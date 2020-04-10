import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>Form</h1>
        <form onSubmit={this.props.formSubmit}>
          <label>First name:
            <input 
              id="firstnameInput"
              name="firstName"
              onChange={this.props.formChange}
              value={this.props.firstName}>
            </input>
          </label>
          <label>Last name:
            <input 
              id="lastnameInput"
              name="lastName"
              onChange={this.props.formChange}
              value={this.props.lastName}>
            </input>
          </label>
          <label>Email:
            <input 
              id="emailInput"
              name="email"
              onChange={this.props.formChange}
              value={this.props.email}>
            </input>
          </label>
          <label>Password:
            <input 
              id="passwordInput"
              name="password"
              onChange={this.props.formChange}
              value={this.props.password}>
            </input>
          </label>
          
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default Form