import { getMoviesRequest, getMoviesSuccess, getMoviesError, getMovies } from './movies';
import types from '../actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../../__mocks__/axios';

describe('actions movies', () => {
  it('should create an action to set movies request', () => {
    const expectedAction = {
      type: types.GET_MOVIES_REQUEST
    };
    expect(getMoviesRequest()).toEqual(expectedAction);
  });

  it('should create an action to set movies success', () => {
    const movies = ['movie1', 'movie2'];
    const expectedAction = {
      type: types.GET_MOVIES_SUCCESS,
      movies
    };
    expect(getMoviesSuccess(movies)).toEqual(expectedAction);
  });

  it('should create an action to set movies success', () => {
    const error = 'error';
    const expectedAction = {
      type: types.GET_MOVIES_ERROR,
      error
    };
    expect(getMoviesError(error)).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
  data: [{ id: '1', title: 'movie' }]
};

describe('async movies actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates GET_MOVIES_REQUEST when fetching movies has been done', () => {
    mockAxios.get.mockImplementation(() => Promise.resolve({ data: mockData }));

    const expectedActions = [
      { type: types.GET_MOVIES_REQUEST },
      { type: types.GET_MOVIES_SUCCESS, movies: mockData['data'] }
    ];
    const store = mockStore({ movies: [] });

    return store.dispatch(getMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
