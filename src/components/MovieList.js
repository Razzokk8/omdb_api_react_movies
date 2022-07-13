import MovieItem from "./MovieItem";

const MovieList = ({movies, onSelectMovie}) => {
    return (
    <div className="row" style={{display: 'flex', justifyContent: 'space-around'}}>
       { movies.map(movie => <MovieItem onSelectMovie={onSelectMovie} key={movie.imdbID} movie={movie} />)}
    </div>
    );

};
export default MovieList;