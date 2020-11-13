import actions from '../actionTypes';

const searchBy = value => ({
  type: actions.SEARCH_BY,
  payload: value
});

export default searchBy;
