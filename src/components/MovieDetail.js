export default function MovieDetail ({movie, error}) {
    return (
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">
          <b>
            {movie?.Title}
          </b>
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-start">
        <b>Years</b>:&#x2800;{movie?.Year}
        <br />
        <b>Country</b>:&#x2800;{movie?.Country}
        <br />
       <b>Language</b>:&#x2800;{movie?.Language}
       <br />        
       <b>Actors</b>:&#x2800;{movie?.Actors}
      </div>            
      <hr/>
      <div className="modal-body text-start">
        {movie?.Plot}
        {error}
        <br/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    );
};
