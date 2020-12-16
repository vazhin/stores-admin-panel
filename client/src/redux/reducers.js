import { SET_DATA, SET_PREVIOUS_ID, SET_PAGE } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload.data };
    case SET_PREVIOUS_ID:
      return { ...state, previousId: action.payload.previousId };
    case SET_PAGE:
      return { ...state, page: action.payload.page };
    default:
      return state;
  }
};
