<<<<<<< HEAD
import React, { useState } from 'react';
import PropTypes from 'prop-types';
=======
import React, { useState } from "react";
import PropTypes from "prop-types";
>>>>>>> gh-pages

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };
<<<<<<< HEAD

  const handleClickRegister = (e) => {
    e.preventDefault();
    props.toRegistrationView('');
  };

  return (
    <div>
      <h1>Login</h1>
         <form>
           <label>
             Username:
               <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <span>Don't have an account? </span>
        <button type='submit' onClick={handleClickRegister}>
          Register
        </button>
    </form>
  </div>
=======
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <a
          href="#"
          onClick={() => {
            props.onRegisterClick(true);
          }}
        >
          Register
        </a>
      </form>
    </div>
>>>>>>> gh-pages
  );
}

LoginView.propTypes = {
<<<<<<< HEAD
  onLoggedIn: PropTypes.func.isRequired,
  toRegistrationView: PropTypes.func.isRequired,
=======
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
>>>>>>> gh-pages
};