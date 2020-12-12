import { SET_DATA, SET_PREVIOUS_ID } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload.data };
    case SET_PREVIOUS_ID:
      return { ...state, previousId: action.payload.previousId };
    default:
      return state;
  }
};
