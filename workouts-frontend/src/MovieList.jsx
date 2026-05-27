import MovieCard from "./MovieCard"

function MovieList({ movies, onDeleteMovie, onToggleWatched }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDeleteMovie={onDeleteMovie}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </div>
  )
}

export default MovieList