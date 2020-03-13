import React, {useState, useEffect } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../actions";
import MovieListSlick from "./MovieListSlick";

function MovieList() {
  const [latestMovies, setLatest] = useState([]);
  const [trendingMovies, setTrending] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchMovies());
    getLatestMovies();
    getTrendingMovies();
  }, []);
  
  // useSelector(state => console.log("state", state));

  function getLatestMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&include_adult=false&api_key=64e5e52b0be480556671e1b5f5e825bd"
      )
      .then(res => setLatest(res.data.results))
      .catch(error => console.log(error));
  }

  function getTrendingMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=64e5e52b0be480556671e1b5f5e825bd"
      )
      .then(res => setTrending(res.data.results))
      .catch(error => console.log(error));
  }

  return (
    <div className="container">
      <MovieListSlick movies={latestMovies} title={"Latest"} />
      <MovieListSlick movies={trendingMovies} title={"Trending"} />
    </div>
  );
}

export default MovieList;