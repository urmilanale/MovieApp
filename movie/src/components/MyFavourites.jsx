import React from 'react';
import MovieDetails from './MovieDetails';

const MyFavourites = ({myfavourites}) => {

    return ( 
        <>
        {myfavourites?.map((movie) => {
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
 
export default MyFavourites;