import React, { useState } from "react";
import "../css/header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import MyFavourites from "../components/MyFavourites";
import MyWatchlist from "../components/MyWatchlist";
import Login from "../components/Login";
import AppConstants from "../constants/constants";

const { SEARCH_URL } = AppConstants;

const MovieHeader = ({
  myWatchlist,
  myfavourites,
  movies,
  addToWatchlist,
  addToFavourites,
  searchValue,
  setSearchValue,
}) => {
  return (
    <>
      <div class="header">
        <h1>Movies</h1>
      </div>

      <Router>
        <div class="topnav">
          <div>Logo</div>
          <input
            type="textS"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Type to search..."
          ></input>
          <div>Search</div>
          <div>
            <Link to="/">Movies</Link>
          </div>
          <div>
            <Link to="/favourites">My Favourites</Link>
          </div>
          <div>
            <Link to="/watchlist">My WatchList</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <MovieList
                  movies={movies}
                  addToFavourites={addToFavourites}
                  addToWatchlist={addToWatchlist}
                />
              }
            ></Route>
            <Route
              exact
              path="/favourites"
              element={<MyFavourites myfavourites={myfavourites} />}
            ></Route>
            <Route
              exact
              path="/watchlist"
              element={<MyWatchlist myWatchlist={myWatchlist} />}
            ></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default MovieHeader;
