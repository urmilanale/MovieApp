import React, { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieFooter from "./MovieFooter";
import AppConstants from "../constants/constants";

const { URL, SEARCH_URL } = AppConstants;

const MovieContaner = () => {
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouritMovies] = useState([]);
  const [myWatchlist, setWatchlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const searchMovies = () => {
    fetch(SEARCH_URL + searchValue)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (searchValue.trim() !== "") {
      searchMovies();
    } else {
      getMovies();
    }
  }, [searchValue]);

  const addToFavourites = (movie) => {
    const updatedFavouritMovies = [...favouriteMovies, movie];
    setFavouritMovies(updatedFavouritMovies);
  };

  const addToWatchlist = (movie) => {
    const updatedWatchList = [...myWatchlist, movie];
    setWatchlist(updatedWatchList);
  };

  useEffect(() => {
    getMovies();
    searchMovies();
  }, []);
  return (
    <>
      <MovieHeader
        myWatchlist={myWatchlist}
        myfavourites={favouriteMovies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        movies={movies}
        addToFavourites={addToFavourites}
        addToWatchlist={addToWatchlist}
      />
      <MovieFooter />
    </>
  );
};

export default MovieContaner;
