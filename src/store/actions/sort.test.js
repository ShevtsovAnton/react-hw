import sort from './sort';
import types from '../actionTypes';

describe('actions sort', () => {
  it('should create an action to set sort', () => {
    const sortBy = 'release date';
    const expectedAction = {
      type: types.SORT_BY,
      payload: sortBy
    };
    expect(sort(sortBy)).toEqual(expectedAction);
  });
});
