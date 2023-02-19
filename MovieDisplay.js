import React, { Component, useEffect, useState } from 'react';
import '../styles/MovieDisplay.css';
import arrowIcon from '../assets/arrowIcon.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios' 
// import { getMovieDetails } from '../apiCalls';

const MovieDisplay = ({movies}) => {
    const [moviee,setMoviee]=useState([])
    // const [ourmovie,setOurmovie]=useState('')
    // const [id,setId]=useState('')

    // setId(useParams());
    const id=useParams();
    console.log(id.movieId);
    const ourmovie=movies.find(item => item.imdbID === id.movieId);
    console.log(ourmovie.Title)
    return (
      <>

       
        <div className='movieBackdrop' style={{backgroundImage: `url(${ourmovie.Poster})`}}>
          <div className='movieContainer'>
            <img className='moviePoster' src={ourmovie.Poster} alt={`poster`}/>
            <section className='movieInfo'>
              <p className='infoTitle'>Title: <span className='infoContent'> {ourmovie.Title}</span></p>
              <p className='infoTitle'>Type: <span className='infoContent'>{ourmovie.Type}</span></p>
              <p className='infoTitle'>Release Year: <span className='infoContent'>{ourmovie.Year}</span></p>
              <p className='infoTitle'>Genres: <span className='infoContent'>Action & Thriller</span></p>
              <div className='arrow-flex'>
                <Link to="/">
                  <input type='image' className='arrow' src={arrowIcon} alt='arrow icon'/>
                </ Link>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }


export default MovieDisplay;