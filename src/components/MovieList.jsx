// 6
import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie}/>
      })}
    </div>
  )
}


export default MovieList;


// // 5
// import { useState } from 'react';

// // Array of movies
// import moviesData from '../movies-data.json';

// function MovieList() {
//   // Declare a state variable "movies"
//   // and set the array from movies-data.json as the initial state
//   const [movies, setMovies] = useState(moviesData);

//   const deleteMovie = (movieId) => {
//     const filteredMovies = movies.filter((movie) => {
//       return movie._id !== movieId;
//     });

//     setMovies(filteredMovies);
//   };

//   return (
//     <div>
//       <h2>Movie List</h2>
//       {movies.map((movie) => {
//         return (
//           <div className="MovieCard">
//             <h3>{movie.title}</h3>
//             <p>Director: {movie.director}</p>
//             <p>Rating: {movie.IMDBRating}</p>
//             <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
//               Delete 🗑
//             </button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default MovieList;
