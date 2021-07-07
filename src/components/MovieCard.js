import React from 'react'

function MovieCard(props) {
  const { movieP, deleteMovieP } = props;

  return (
    <div className="MovieCard">
      <h3>{movieP.title}</h3>
      <p>Director: {movieP.director}</p>
      <p>Rating: {movieP.IMDBRating}</p>
      <button onClick={() => deleteMovieP(movieP._id)} className="btn-delete">
        Delete 🗑
      </button>
    </div>
  )
}

export default MovieCard
