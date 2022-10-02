import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

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
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  toRegistrationView: PropTypes.func.isRequired,
};