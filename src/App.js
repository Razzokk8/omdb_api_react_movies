import { useState, useEffect} from 'react';
import './App.css';
import { Footer } from './components/Footer';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';
import { NavBar } from './components/NavBar';

const APIKEY = process.env.REACT_APP_APIKEY;
const APIURL = process.env.REACT_APP_APIURL;

const fetchMovies = async (search = 'Godzilla') => {
    if(search.length < 3) {
      return;
    }
    const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
    const { Error, Search: movies, totalResults: totalCount } = response;
    console.log(response);
    return { movies, totalCount, Error: Error ?? '' };
  };
  
  const fetchMoviesById = async (movieId) => {
    const response = await fetch(APIURL + '?apikey=' + APIKEY + '&i=' + movieId).then(res => res.json());
    return response;
  };


function App() {

  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = async (movie) => {
    setSelectedMovie(movie);
    const newMovie = await fetchMoviesById(movie.imdbID);
    if(newMovie.Error){
      setError(newMovie.Error);
      setSelectedMovie(null);
    } else {
      setSelectedMovie(newMovie);
    };
  };

const callAPI = async (search='') => {
    const data = await fetchMovies(search);
    setError(data.Error);
    if(!data.Error.length) {
    setMovies(data.movies);
    setSelectedMovie(data.movies[0]);
    setTotalCount(data.totalCount);
    } else {
      setTotalCount(0);
      setMovies([]);
    }
  };
  useEffect(() =>{
  callAPI('Jurassic');
    return () => {

    }
  },[]);

  return (
  <>
    <NavBar onSearchChange={callAPI}/>
    <div className="App">
      <header className="App-header">
      <h1 className='text-black'>MOVIES({totalCount})</h1>
      {
        !error ? <MovieList onSelectMovie={selectMovie} movies={movies} /> : <h2>{ error }</h2>
        }
        <MovieDetail error={errorDetail} movie={selectedMovie} />
      </header>
    </div>
    <Footer />
  </>
  );
}

export default App;
