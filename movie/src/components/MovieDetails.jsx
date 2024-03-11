import React from "react";

const MovieDetails = ({
  poster,
  addToFavourites,
  addToWatchlist,
  movie,
  isMovieList,
}) => {
  return (
    <div style={styles.container}>
      <img
        style={styles.image}
        alt="movie"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
      />
      {isMovieList ? (
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => addToFavourites(movie)}>
            Add To Favourites
          </button>
          <button style={styles.button} onClick={() => addToWatchlist(movie)}>
            Add To Watchlist
          </button>
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    padding: "5px 10px",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    border: "none",
    outline: "none",
  },
};

export default MovieDetails;