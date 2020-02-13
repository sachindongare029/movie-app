import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const MovieInfo = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    var url =
      `https://api.themoviedb.org/3/movie/${id}?api_key=64e5e52b0be480556671e1b5f5e825bd&append_to_response=credits&language=en-US`;
    axios
      .get(url)
      .then(res => setMovie(res.data))
      .catch(error => console.log(error));
  }, [id])

  console.log("state", movie);
  var posterImage = {
    backgroundImage:
      "url(https://image.tmdb.org/t/p/original/" + movie.poster_path + ")"
  };
  return (
    <div className="movie__info__container">
      <div className="movie__banner" style={posterImage}></div>
      <div className="container">
        <div className="movie__info">
          <div className="row">
            <div className="col-sm-6">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
            <div className="col-sm-6">
              <section className="movie__card__details">
                <div className="movie__card__row">
                  <span>Genre</span>
                  <span> hello </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;