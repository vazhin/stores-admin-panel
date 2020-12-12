import { SET_DATA } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
