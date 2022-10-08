import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <div className='login-view'>
      <Row>
      <Col sm={0} md={3}></Col>
        <Col>
          <h2 className='display-4'>Login to myFlix</h2>
        </Col>
      </Row>
      <Form className='login-form'>
        <Form.Group controlId='formUsername'>
          <Row className='login-view__line'>
            <Col sm={0} md={3}></Col>
            <Col sm={12} md={2}>
              <Form.Label>Username:</Form.Label>
            </Col>
            <Col sm={12} md={4}>
              <Form.Control
                type='text'
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId='formPassword'>
          <Row className='login-view__line'>
            <Col sm={0} md={3}></Col>
            <Col sm={12} md={2}>
              <Form.Label>Password:</Form.Label>
            </Col>
            <Col sm={12} md={4}>
              <Form.Control
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        <Row className='login-view__line'>
          <Col md={8}></Col>
          <Col>
            <Button id= 'login-button'
            variant='primary' type='submit' onClick={handleSubmit}>
              Log in
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
      </Row>
      <Row className= 'register-row '>
        <Col sm={0} md={5}></Col>
        <Col sm={12} md={3}>
          <p className= 'd-flex justify-content-end'>Don't have an account? </p>
        </Col>
        <Col>
          <Button id= 'register-btn'
            variant='secondary'
            type='submit'
            onClick={handleClickRegister}
          >
            Register
          </Button>
        </Col>
      </Row>
    </div>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};