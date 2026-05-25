import { useEffect, useState } from "react"

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [watched, setWatched] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
  }, [])

  function handleAddMovie(e) {
    e.preventDefault()

    const newMovie = {
      title, 
      rating, 
      watched
    }

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMovie)
    })
      .then((res) => res.json())
      .then((createdMovie) => {
        setMovies([...movies, createdMovie])
        setTitle("")
        setRating("")
        setWatched(false)
      })
  }

  function handleDeleteMovie(id) {
    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json()) 
      .then(() => {
        setMovies(movies.filter((movie) => movie.id !== id))
      })
  }

  function handleToggleWatched(movie) {
    const updatedWatched = !movie.watched

    fetch(`http://localhost:5000/movies/${movie.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ watched: updatedWatched })
    })
      .then((res) => res.json())
      .then(() => {
        setMovies(
          movies.map((currentMovie) => {
            if (currentMovie.id === movie.id) {
              return { ...currentMovie, watched: updatedWatched }
            }

            return currentMovie
          })
        )
      })
  }

  return (
    <div>
      <h1>Movies</h1>

      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
          />
          Watched
        </label>

        <button type="submit">Add Movie</button>
      </form>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
          <p>{movie.watched ? "Watched" : "Not watched"}</p>

          <button onClick={() => handleToggleWatched(movie)}>
            Toggle Watched
          </button>

          <button onClick={() => handleDeleteMovie(movie.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default App