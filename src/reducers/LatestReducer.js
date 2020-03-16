const LatestReducer = (state = {}, action) => {
  switch (action.type) {
    case "LATEST_MOVIES_LOADING": {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case "LATEST_LOAD_SUCCESS": {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case "LATEST_LOAD_ERROR": {
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

export default LatestReducer;
