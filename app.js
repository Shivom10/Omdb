import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../styles/App.css';
import {BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import Movies from './Movies';
import MovieDisplay from './MovieDisplay';

const App=()=>{
const[movies,setMovies]=useState([]);
// <--------------------------------------All Movies Request--------------------------------------------->
const getmovies=async()=>
{
const movieRequest=await axios.get('http://www.omdbapi.com/?s=harry&apikey=25969c0b');
setMovies(movieRequest.data.Search);
console.log(movies);
}

// <--------------------------------------Use Effects calls--------------------------------------------->
useEffect(()=>{getmovies();},[]);
// <---------------------------------------Rendering----------------------------------------------------->
return(<>
<div className='app'>
        <header className='siteHeader'>
          <h1 className='siteTitle'>🍿 Cogo Movies 🍿</h1>
        </header>
        {/* <Movies movies={movies} />  */}
        <Router>
        <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route
          exact path="/:movieId"
          element={ <MovieDisplay movies={movies}/>}
          
        />
        {/* <Route path="moviedisplay" element={<Blogs />} /> */}
        
        
        </Routes></Router>
</div>




</>


)}

export default App;