const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_MOVIE_LOADING": {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case "LOAD_MOVIE_SUCCESS": {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case "LOAD_MOVIE_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
