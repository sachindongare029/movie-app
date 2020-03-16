import axios from "axios";

const fetchLatestMovies = () => dispatch => {
  dispatch({ type: "LATEST_MOVIES_LOADING" });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&include_adult=false&api_key=64e5e52b0be480556671e1b5f5e825bd"
    )
    .then(response => {
      var data = response.data.results;
      dispatch({ type: "LATEST_LOAD_SUCCESS", data });
    })
    .catch(error =>
      dispatch({
        type: "LATEST_LOAD_ERROR",
        error: error.message || "Unexpected Error!!!"
      })
    );
};

const fetchTrendingMovies = () => dispatch => {
  dispatch({ type: "TRENDING_MOVIES_LOADING" });
  axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=64e5e52b0be480556671e1b5f5e825bd"
    )
    .then(response => {
      var data = response.data.results;
      dispatch({ type: "TRENDING_LOAD_SUCCESS", data });
    })
    .catch(error =>
      dispatch({
        type: "TRENDING_LOAD_ERROR",
        error: error.message || "Unexpected Error!!!"
      })
    );
};
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export {
  fetchLatestMovies,
  fetchTrendingMovies,
  increment,
  decrement
};
