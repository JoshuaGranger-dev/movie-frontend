function MovieCard({ movie, onDeleteMovie, onToggleWatched }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      <p>{movie.watched ? "Watched" : "Not watched"}</p>

      <button onClick={() => onToggleWatched(movie)}>
        Toggle Watched
      </button>

      <button onClick={() => onDeleteMovie(movie.id)}>
        Delete
      </button>
    </div>
  )
}

export default MovieCard