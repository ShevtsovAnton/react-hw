import filterBy from './filter';
import types from '../actionTypes';

describe('actions filter', () => {
  it('should create an action to set filter', () => {
    const filter = 'Comedy';
    const expectedAction = {
      type: types.FILTER_BY,
      payload: filter
    };
    expect(filterBy(filter)).toEqual(expectedAction);
  });
});
