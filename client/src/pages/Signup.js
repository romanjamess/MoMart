import React, { useState } from 'react';
import { ADD_USER } from "../utils/mutations"
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth"
import { Link } from 'react-router-dom';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const { data } = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = data.addUser.token;
      Auth.login(token);
      Auth.saveUserName(data.addUser.user)
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
        <h2 class="title has-text-centered">Create an account for Mo' fun</h2><hr></hr>
        <form onSubmit={handleFormSubmit} class="signup-form">

        {/* First Name Field */}
          <div className="field">
            <label htmlFor="firstName">First Name:</label>
            <p>
            <input
              class="input"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            /></p>
          </div>

        {/* Last Name Field */}
          <div className="field">
            <label htmlFor="lastName">Last Name:</label>
            <p>
            <input
              class="input"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            /></p>
          </div>

          {/* Email Field */}
          <div className="field">
            <label htmlFor="email">Email:</label>
            <p class="control has-icons-left">
            <input
              class="input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
            <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span></p>
          </div>

          {/* Password Field */}
          <div className="field">
            <label htmlFor="pwd">Password:</label>
            <p class="control has-icons-left">
            <input
              class="input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
            <span class="icon is-small is-left"><i class="fas fa-lock"></i></span></p>
          </div>
          <div className="flex-row flex-end">
            <button class="button is-dark is-fullwidth" type="submit">Submit</button>
          </div>
          <p class="pb-1 pt-4 has-text-centered">Already have an account?
        <Link to="/login"> Login</Link>
        </p>
        </form>
      </div>
    );
  }
  
  export default Signup;
  
