import React, { useEffect } from "react";
import axios from 'axios';

function MovieList() {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=64e5e52b0be480556671e1b5f5e825bd"
      )
      .then(function(response) {
        console.log(response.data.results);
      })
      .catch(function(error) {
        console.log(error);
      })
  });

  return (
    <div className="container">
      <div className="movie__container">
        <div className="page__title">
          <h2>Latest</h2>
        </div>
        <div className="movie__list__container">
          hello 
        </div>
      </div>
    </div>
  );
}

export default MovieList;