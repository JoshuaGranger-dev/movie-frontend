import { useEffect, useState } from "react"

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
  }, [])

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
          <p>{movie.watched ? "Watched" : "Not watched"}</p>
        </div>
      ))}
    </div>
  )
}

export default App