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
    }
  }

  setFormState = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  clearFormState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
        <Form 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          setFormState={this.setFormState}
          clearFormState={this.clearFormState}
        />
    );
  }
}

export default App;
