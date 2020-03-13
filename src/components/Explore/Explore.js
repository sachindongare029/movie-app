import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Explore() {
  const [searchResults, setSearch] = useState([]);
  const [keyword, setKeyword] = useState("Harry Potter");
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetchSearch(keyword);
  }, [keyword]);

  function fetchSearch(value) {
    setKeyword(value);
    if (value === "") {
      setNoResult(true);
      return;
    } else {
      setNoResult(false);
    }
    var url = `https://api.themoviedb.org/3/search/multi?api_key=64e5e52b0be480556671e1b5f5e825bd&include_adult=false&language=en-US&page=1&query=${value}`;
    axios
      .get(url)
      .then(res => {
        res.data.results.length
          ? setSearch(res.data.results)
          : setNoResult(true);
      })
      .catch(error => console.log(error));
  }

  // console.log("state", searchResults);
  return (
    <div className="explore__container container">
      <div className="row">
        <div className="col">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search movies, actors, genre..."
              value={keyword}
              onChange={e => fetchSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="search__results">
        <h2>Results</h2>
        <div className="results">
          {noResult ? (
            <div className="alert alert-info" role="alert">
              No results
            </div>
          ) : (
            searchResults &&
            searchResults.map(movie => {
              return (
                <div key={movie.id} className="movie__wrapper">
                  <div className="movie__inner">
                    <div className="movie__image">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                        }
                        alt="Movie Poster"
                      />
                    </div>
                    <div className="movie__name">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie__ratings">
                      <span>{movie.vote_average}</span>
                      <Link className="nav-link" to={"/movie/" + movie.id}>
                        Show more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;