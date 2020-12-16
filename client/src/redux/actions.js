import { SET_DATA, SET_PREVIOUS_ID, SET_PAGE } from './actionTypes';

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const setPreviousId = (previousId) => ({
  type: SET_PREVIOUS_ID,
  payload: { previousId },
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});
