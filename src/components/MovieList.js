import React, {useState, useEffect } from "react";
import axios from 'axios';
import MovieListSlick from "./MovieListSlick";

function MovieList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=64e5e52b0be480556671e1b5f5e825bd"
      )
      .then(res => setCards(res.data.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="container">
      <div className="movie__container">
        <div className="page__title">
          <h2>Latest</h2>
        </div>
        <div className="movie__list__container">
          {cards &&
            cards.map(card => {
              return (
                <div key={card.id} className="movie__wrapper">
                  <div className="movie__inner">
                    <div className="movie__image">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" + card.poster_path
                        }
                        alt="Movie Poster"
                      />
                    </div>
                    <div className="movie__name">
                      <h4>{card.title}</h4>
                    </div>
                    <div className="movie__ratings">
                      <span>{card.vote_average}</span>
                      <a href="#">Show more</a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <MovieListSlick cards={cards} />
    </div>
  );
}

export default MovieList;