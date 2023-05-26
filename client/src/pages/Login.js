import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations"
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = data.login.token;
      Auth.login(token);
      Auth.saveUserName(data.login.user)
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="column is-one-third container my-1">
      <h2 class="title has-text-centered">Login to view your Cart</h2><hr></hr>

      {/* Email Field */}
      <form  onSubmit={handleFormSubmit} class="login-form">
        <div className="flex-row space-between my-2 field">
          <label htmlFor="email">Email address:</label>
          <p class="control has-icons-left">
          <input 
            class="input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          /><span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        </p>
        </div>
        {/* Password Field */}
        <div className="flex-row space-between my-2 field">
          <label htmlFor="pwd">Password:</label>
          <p class="control has-icons-left">
          <input
            class="input"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          /><span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        </p>
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        {/* Submit Button */}
        <div className="flex-row flex-end">
          <button class="button is-dark is-fullwidth" type="submit">Submit</button>

          <p class="pb-1 pt-4 has-text-centered">Don't have an account, Create new account:</p>
          <Link to="/Signup"><button type="button" class="button is-light is-fullwidth">Sign Up</button></Link>
        </div>
        
      </form>
    </div>
  );
}

export default Login;