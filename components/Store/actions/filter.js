import actions from '../actionTypes';

const filterBy = filter => ({
  type: actions.FILTER_BY,
  payload: filter
});

export default filterBy;
