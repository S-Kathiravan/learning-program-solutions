import React, { Component } from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5 ? 'Full Name must be at least 5 characters long!' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be at least 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors, fullName, email, password } = this.state;
    
    if (fullName.length > 0 && email.length > 0 && password.length > 0 && errors.fullName === '' && errors.email === '' && errors.password === '') {
        alert('Valid Form');
    } else {
        alert('Invalid Form');
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className='form-container'>
        <h2>Register Here!!!</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label>Name:</label>
            <input type='text' name='fullName' onChange={this.handleChange} noValidate />
            {errors.fullName.length > 0 && 
              <span className='error'>{errors.fullName}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input type='email' name='email' onChange={this.handleChange} noValidate />
            {errors.email.length > 0 && 
              <span className='error'>{errors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input type='password' name='password' onChange={this.handleChange} noValidate />
            {errors.password.length > 0 && 
              <span className='error'>{errors.password}</span>}
          </div>
          <div className='submit-button'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;