import React, { useState } from "react";
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
import PropTypes from "prop-types";
>>>>>>> gh-pages

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirthday] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birth);
    props.onRegistration(username);
  };

  return (
    <div>
      <h1>Register</h1>
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
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Birth date:
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
<<<<<<< HEAD
        <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
=======
        <button type="submit" onClick={handleSubmit}>Submit</button>

>>>>>>> gh-pages
        <a
          href="#"
          onClick={() => {
            props.onRegisterClick(false);
          }}
        >
          Already registered?
        </a>
      </form>
    </div>
  );
}
<<<<<<< HEAD

RegistrationView.propTypes = {
  onRegister: PropTypes.func.isRequired,
=======
RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
>>>>>>> gh-pages
};