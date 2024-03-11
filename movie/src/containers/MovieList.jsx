import React from "react";
import MovieDetails from "../components/MovieDetails";
import "../css//moviecard.css";

const MovieList = ({ movies, addToFavourites, addToWatchlist }) => {
  return (
    <div className="movieListContainer">
      {movies?.map((movie) => {
        const { poster_path } = movie;
        return (
          <div className="movieItem" key={movie.id}>
            <MovieDetails
              poster={poster_path}
              movie={movie}
              addToFavourites={addToFavourites}
              addToWatchlist={addToWatchlist}
              isMovieList
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;