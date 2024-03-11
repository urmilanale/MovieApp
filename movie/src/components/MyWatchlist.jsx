import React from 'react';
import MovieDetails from './MovieDetails';

const MyWatchlist = ({myWatchlist}) => {
    return ( 
        <>
        {myWatchlist?.map((movie) => {
        const { poster_path } = movie;
        return (
          <div>
            <MovieDetails
              poster={poster_path}
            />
          </div>
        );
      })}
        </>
     );
}
 
export default MyWatchlist;