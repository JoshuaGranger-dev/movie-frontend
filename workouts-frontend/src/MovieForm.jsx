function MovieForm ({
    title, 
    setTitle,
    rating, 
    setRating,
    watched,
    setWatched,
    error,
    setError,
    onAddMovie
}) {
    return (
        <>
            {error && <p>{error}</p>}

            <form onSubmit={onAddMovie}>
                <input type="text"
                    placeholder="Movie Title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                        setError("")
                    }} 
                />

                <input type="text"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value)
                        setError("")
                    }} 
                />

                <label>
                    <input 
                        type="text"
                        checked={watched}
                        onChange={(e) => setWatched(e.target.checked)} 
                    />
                    Watched
                </label>
            </form>
        </>
    )
}

export default MovieForm