import React from 'react';
import Card from './Card';
import '../styles/Movies.css';
import Dropdown from './Dropdown';

const Movies = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        title={movie.Title}
        img={movie.Poster}
        rating={1}
        //key={movie.id}
        id={movie.imdbID}
      />
    )
  })

  return (
    <>
    
      <div className='dropdown'>
        <Dropdown movies={movies} />
      </div>
      <div className='moviesContainer'>
        {movieCards}
      </div>
    </>
  )
}

export default Movies; 