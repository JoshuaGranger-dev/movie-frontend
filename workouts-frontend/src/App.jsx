import { useEffect, useState } from "react"
import MovieForm from "./MovieForm"
import MovieList from "./MovieList"

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [watched, setWatched] = useState(false)
  const [error, setError] = useState("")

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
      .then((res) => {
        return res.json().then((data) => {
          if (!res.ok) {
            throw new Error(data.message || "Something went wrong")
          }

          return data
        })
      })
      .then((createdMovie) => {
        setMovies([...movies, createdMovie])
        setTitle("")
        setRating("")
        setWatched(false)
        setError("")
      })
      .catch((err) => {
        setError(err.message)
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

      <MovieForm
        title={title}
        setTitle={setTitle}
        rating={rating}
        setRating={setRating}
        watched={watched}
        setWatched={setWatched}
        error={error}
        setError={setError}
        onAddMovie={handleAddMovie}
      />

      <MovieList
        movies={movies}
        onDeleteMovie={handleDeleteMovie}
        onToggleWatched={handleToggleWatched}
      />
    </div>
  )
}

export default App