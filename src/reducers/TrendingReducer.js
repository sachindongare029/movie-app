const TrendingReducer = (state = {}, action) => {
  switch (action.type) {
    case "TRENDING_MOVIES_LOADING": {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case "TRENDING_LOAD_SUCCESS": {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case "TRENDING_LOAD_ERROR": {
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

export default TrendingReducer;
