import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: '63063f99ec6ad72af75fd03',
          Title: 'The Great Gatsby',
          Description: 'The uniquely imaginative Baz Luhrmann (Moulin Rouge!, Australia) tackles F. Scott Fitzgerald\'s landmark novel, The Great Gatsby, with blockbuster star Leonardo DiCaprio in the title role. Spider-Man\'s Tobey Maguire stars as the Fitzgerald-like would-be writer Nick Carraway who arrives in New York in 1922, an era of loose morals, glittering jazz and bootleg kings. Chasing his own American Dream, Nick encounters the mysterious millionaire Gatsby and his bewitching cousin Daisy. Soon, Nick is drawn into the captivating world of the super-rich, their illusions, loves and deceits. Bearing witness to this new world, Nick pens a tale of impossible love, incorruptible dreams and unforgettable tragedy -- mirroring our own times and struggles.',
          Genre: {
            Name: 'Romance',
            Description: 'The romance genre is defined by intimate relationships. Sometimes these movies can have a darker twist, but the idea is to lean on the natural conflict derived from the pursuit of intimacy and love.'
          },
          Director: {
            Name: 'Baz Luhrmann',
            Bio: 'Baz Luhrmann is an Australian writer, director and producer with projects spanning film, television, opera, theater, music and recording industries. He is regarded by many as a contemporary example of an auteur for his distinctly recognizable style and deep involvement in the writing, directing, design and musical components of all his work. As a storyteller, he\'s known as a pioneer of pop culture, fusing high and low culture with a unique sonic and cinematic language. He is the most commercially successful Australian director, with his films making up four of the top ten highest worldwide grossing Australian films ever.'
          },
          ImagePath: 'https://www.imdb.com/title/tt1343092/mediaviewer/rm2643435776/?ref_=tt_ov_i',
          Featured: true
        },
        {
          _id: '6307c1c2ec6ad72af75fd039',
          Title: 'Saving Private Ryan',
          Description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
          Genre: {
            Name: 'Drama',
            Description: 'The drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences. Drama is a very broad category and untethered to any era.'
          },
          Director: {
            Name: 'Steven Spielberg',
            Bio: 'One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood\'s best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else..'
          },
          ImagePath: 'https://www.imdb.com/title/tt0120815/mediaviewer/rm1924732160/?ref_=tt_ov_i',
          Featured: true
        },
        {
          _id: '6307c1d4ec6ad72af75fd03a',
          Title: 'Man of Steel',
          Description: 'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.',
          Genre: {
            Name: 'Action',
            Description: 'Movies in the action genre are defined by risk and stakes. While many movies may feature an action sequence, to be appropriately categorized inside the action genre, the bulk of the content must be action-oriented, including fight scenes, stunts, car chases, and general danger..'
          },
          Director: {
            Name: 'Zack Snyder',
            Bio: 'Zachary Edward "Zack" Snyder (born March 1, 1966) is an American film director, film producer, and screenwriter, best known for action and science fiction films. Snyder made his feature film debut with the 2004 remake Dawn of the Dead and has gone on to be known for his comic book movies and superhero films, including 300 (2007), Watchmen (2009), Man of Steel (2013) and its upcoming sequel, Batman v Superman: Dawn of Justice (2016). Snyder is the co-founder of Cruel and Unusual Films, a production company he established in 2004, alongside his wife Deborah Snyder and producing partner Wesley Coller.'
          },
          ImagePath: 'https://www.imdb.com/title/tt0770828/mediaviewer/rm2035131904/?ref_=tt_ov_i',
          Featured: true
        },
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;


    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />))}
      </div>
    );
  }
}