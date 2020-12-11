import {
  SET_ITEMS,
  // SET_TYPE_OF_ITEMS,
  // SET_CURRENT_PAGE,
  // SET_PAGE_COUNT,
  // SET_ITEM_COUNT,
} from './actionTypes';

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: { items },
});
