import '../item.css';

const MovieItem = ({movie, onSelectMovie}) => {
    return (
    <div className="item m-1 shadow" style={{width: "18rem"}}>
    <a href={movie.Poster} target="_blank" className="card-link text-secondary">
        <img src={movie.Poster} className="card-img-top shadow bg-light" alt={movie.Title} style={{padding: "10px", marginTop: '10px'}}/>
    </a>
    <div className="c-body">
      <h4 className="card-title">{movie.Title}</h4>
      <p className="card-text">-<b>{movie.Year}</b>-</p>
      
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Category: {movie.Type}</li>
      <li className="list-group-item">Code: {movie.imdbID}</li>
    </ul>
    <div className='card-footer m-2'>
      <button onClick={()=> {onSelectMovie(movie)}} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-sm btn-outline-info text-dark">More Info</button>
    </div>
    
  </div>
  );
};
export default MovieItem;