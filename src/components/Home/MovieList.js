import React, {useState, useEffect } from "react";
import axios from 'axios';
// import { useSelector, useDispatch } from "react-redux";
// import { setUser } from "../../actions";
import MovieListSlick from "./MovieListSlick";

function MovieList() {
  const [latestMovies, setLatest] = useState([]);
  const [trendingMovies, setTrending] = useState([]);
  // const currentUser = useSelector(state => state.currentUser);
  // const dispatch = useDispatch();

  // const user = { name: "Raj" };

  useEffect(() => {
    // dispatch(setUser(user));
    getLatestMovies();
    getTrendingMovies();
  }, []);
  
  // console.log("states ", currentUser);

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