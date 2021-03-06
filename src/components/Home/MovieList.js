import React, {useState, useEffect } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import MovieListSlick from "./MovieListSlick";
import {
  increment,
  fetchLatestMovies,
  fetchTrendingMovies
} from "../../actions";

function MovieList() {
  const [latestMovies, setLatest] = useState([]);
  const [trendingMovies, setTrending] = useState([]);
  const dispatch = useDispatch();
  const test = useSelector(state => state);
  console.log("MovieList -> test", test)

  useEffect(() => {
    dispatch(increment());
    dispatch(fetchLatestMovies());
    dispatch(fetchTrendingMovies());
    getLatestMovies();
    getTrendingMovies();
  }, []);

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