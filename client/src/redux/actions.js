import { SET_DATA } from './actionTypes';

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});
