import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';

import './main-view.scss';

import NavBar from '../navbar/navbar';
import RegistrationView from '../registration-view/registration-view';
import LoginView from '../login-view/login-view';
import ProfileView from '../profile-view/profile-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import GenreView from '../genre-view/genre-view';
import DirectorView from '../director-view/director-view';

import { Row, Col } from 'react-bootstrap';
export default class MainView extends React.Component {
  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      user: null,
      favouriteMovies: [],
    };
  }

  /* When a user successfully logs in, this function updates the
     `user` property in state to that *particular user */
  onLoggedIn(authData) {
    console.log(authData);
    const { Username, FavouriteMovies } = authData.user;
    this.setState({
      user: Username,
      favouriteMovies: FavouriteMovies || [],
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get('https://myflix-firstapi.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addFavorite(movieId) {
    const { user, favouriteMovies } = this.state;
    const token = localStorage.getItem('token');
    if (favoriteMovies.some((favId) => favId === movieId)) {
      console.log('Movie already added to favorites!');
    } else {
      if (token !== null && user !== null) {
        this.setState({
          favouriteMovies: [...favouriteMovies, movieId],
        });
        axios
          .post(
            `https://myflix-firstapi.herokuapp.com/users/${user}/movies/${movieId}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(`Movie successfully added to favourites!`);
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
  }

  removeFavourite(movieId) {
    const { user, favouriteMovies } = this.state;
    const token = localStorage.getItem('token');
    if (token !== null && user !== null) {
      this.setState({
        favouriteMovies: favouriteMovies.filter((movie) => movie !== movieId),
      });
      axios
        .delete(
          `https://myflix-firstapi.herokuapp.com/${user}/movies/${movieId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          console.log(`Movie successfully removed from favourites!`);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
    }
  }

  render() {
    const { movies, user, favouriteMovies } = this.state;
    console.log(favouriteMovies);
    return (
      <Router>
        <NavBar user={user} />
        <Row className="main-view justify-content-md-center">
         {/* <Routes> */}
          <Route
            exact
            path="/" 
            render={() => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in, 
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              return movies.map((m) => (
                <Col md={6} lg={3} key={m._id} className="movie-card">
                  <MovieCard movie={m} />
                </Col>
              ));
            }}
          />
          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />
          <Route
            path={`/users/${user}`}
            render={({ history }) => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in, 
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView
                    favouriteMovies={favoriteMovies.map((movieId) => {
                      return movies.find((m) => m._id === movieId);
                    })}
                    user={user}
                    removeFavourite={this.removeFavourite.bind(this)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in, 
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              return (
                <Col md={8} className="movie-view">
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    addFavourite={this.addFavourite.bind(this)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in, 
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              return (
                <Col md={8}>
                  <DirectorView
                    movies={movies.filter(
                      (m) => m.Director.Name === match.params.name
                    )}
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in, 
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              return (
                <Col md={8}>
                  <GenreView
                    movies={movies.filter(
                      (m) => m.Genre.Name === match.params.name
                    )}
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          {/* </Routes> */}
        </Row>
      </Router>
    );
  }
}

// MainView.propTypes = {};