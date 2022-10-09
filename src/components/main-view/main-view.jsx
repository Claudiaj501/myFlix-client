import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import myFlixLogo from 'url:~/src/myFlix_logo.png';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from "../registration-view/registration-view";
import { LogoutButton } from '../logout-button/logout-button';

import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
  
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registered: true,
    };
  }
  componentDidMount() {
    axios
      .get('https://myflix-firstapi.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }
  // passed to LoginView
  onLoggedIn(user) {
    this.setState({
      user,
    });
  }
  // passed to RegistrationView
  onRegister(registered, user) {
    this.setState({
      registered,
      user,
    });
  }
  // passed to LogoutButton
  logoutUser(uselessParam) {
    this.setState({
      user: false,
      selectedMovie: null,
    });
  }
  toRegistrationView(asdf) {
    this.setState({
      registered: false,
    });
  }
  render() {
    const { movies, selectedMovie, user, registered } = this.state;
    // RegistrationView if user not registered
    if (!registered)
      return (
        <RegistrationView
          onRegister={(registered, username) =>
            this.onRegister(registered, username)
          }
        />
      );
    // LoginView if user is registered, but not logged in
    if (!user)
      return (
        <LoginView
          onLoggedIn={(user) => this.onLoggedIn(user)}
          toRegistrationView={(asdf) => this.toRegistrationView(asdf)}
        />
      );
    // Empty MainView if there are no movies (or still loading)
    if (movies.length === 0)
      return <div className='main-view'>The list is empty!</div>;
    // if we get here then user is registered and logged in
    // Render list of MovieCard if no movie is selected
    // Go to MovieView if a movie is selected
    return (
      
      <div className='main-view'>
        
       
        <Navbar sticky="top" id= 'Nav' >
        <Container >
          <Navbar.Brand>
            <img 
              src= {myFlixLogo}
              width="220"
              height="auto"
              className="d-inline-block align-top"
              alt="myFlix logo"
              id= 'logo-img'
            />
          </Navbar.Brand>
        </Container>
        <LogoutButton
              logoutUser={(uselessParam) => this.logoutUser(uselessParam)}
            />
      </Navbar>
      
      

        {/* <Row className= 'filler'>
          <Col>

          </Col>
        </Row> */}

        {selectedMovie ? (
          <Row>
            <Col>
              <MovieView
                movie={selectedMovie}
                onBackClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          </Row>
        ) : (
          <div>
            <Row id= 'movie-bar' className='justify-content-md-center'>
              <Col md={4}>
                <h1 className='display-2'>Movies</h1>
              </Col>
            </Row>
          <Container>
            <Row className='justify-content-md-center' id= 'cards' >
              {movies.map((movie) => (
                <Col md={4}>
                  <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(movie) => {
                      this.setSelectedMovie(movie);
                    }}
                  />
                </Col>
              ))}
            </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
MainView.propTypes = {};
export default MainView;