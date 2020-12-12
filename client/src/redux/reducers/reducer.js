import {
  SET_DATA,
  // SET_TYPE_OF_ITEMS,
  // SET_CURRENT_PAGE,
  // SET_PAGE_COUNT,
  // SET_ITEM_COUNT,
  // SET_CURRENT_ITEM_COUNT,
} from '../actions/actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload.data };
    // case SET_TYPE_OF_ITEMS:
    //   return { ...state, typeOfItems: action.payload.typeOfItems };
    // case SET_CURRENT_PAGE:
    //   return { ...state, currentPage: action.payload.currentPage };
    // case SET_PAGE_COUNT:
    //   return { ...state, pageCount: action.payload.pageCount };
    // case SET_ITEM_COUNT:
    //   return { ...state, itemCount: action.payload.itemCount };
    // case SET_CURRENT_ITEM_COUNT:
    //   return { ...state, currentItemCount: action.payload.currentItemCount };
    default:
      return state;
  }
};
