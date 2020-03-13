import axios from "axios";

const fetchMovies = () => dispatch => {
  dispatch({ type: "LOAD_USERS_LOADING" });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&include_adult=false&api_key=64e5e52b0be480556671e1b5f5e825bd"
    )
    .then(response => {
      var data = response.data.results;
      dispatch({ type: "LOAD_MOVIE_SUCCESS", data })
    })
    .catch(
      error =>
        dispatch({
          type: "LOAD_MOVIE_ERROR",
          error: error.message || "Unexpected Error!!!"
        })
    );
};

export { fetchMovies };
