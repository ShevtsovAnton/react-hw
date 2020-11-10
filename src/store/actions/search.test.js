import searchBy from './search';
import types from '../actionTypes';

describe('actions search', () => {
  it('should create an action to set search query', () => {
    const query = 'test';
    const expectedAction = {
      type: types.SEARCH_BY,
      payload: query
    };
    expect(searchBy(query)).toEqual(expectedAction);
  });
});
