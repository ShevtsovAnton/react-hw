import actions from '../actionTypes';

const initialState = {
  movies: [],
  sortBy: 'release_date',
  filterBy: 'all',
  searchQuery: '',
  isLoading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case actions.GET_MOVIES_SUCCESS:
      console.log('REDUCER ACTION', action);
      return {
        ...state,
        movies: [...action.movies],
        isLoading: false
      };

    case actions.GET_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false
      };

    case actions.SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };

    case actions.FILTER_BY:
      return {
        ...state,
        filterBy: action.payload
      };

    case actions.SEARCH_BY:
      return {
        ...state,
        searchQuery: action.payload
      };

    case actions.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };

    case actions.EDIT_MOVIE_SUCCESS: {
      const foundIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, foundIndex, 1),
          action.payload,
          ...state.movies.slice(foundIndex + 1)
        ]
      };
    }

    case actions.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies.filter(movie => movie.id !== action.payload)]
      };

    default:
      return state;
  }
};

export default rootReducer;
