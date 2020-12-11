import {
  SET_ITEMS,
  // SET_TYPE_OF_ITEMS,
  // SET_CURRENT_PAGE,
  // SET_PAGE_COUNT,
  // SET_ITEM_COUNT,
} from '../actions/actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
};
