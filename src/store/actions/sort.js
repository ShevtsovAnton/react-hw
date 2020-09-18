import actions from '../actionTypes';

const sort = value => ({
  type: actions.SORT_BY,
  payload: value
});

export default sort;
