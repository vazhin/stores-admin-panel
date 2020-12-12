import {
  SET_DATA,
  // SET_TYPE_OF_ITEMS,
  // SET_CURRENT_PAGE,
  // SET_PAGE_COUNT,
  // SET_ITEM_COUNT,
  // SET_CURRENT_ITEM_COUNT,
} from './actionTypes';

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});

// export const setTypeOfItems = (typeOfItems) => ({
//   type: SET_TYPE_OF_ITEMS,
//   payload: { typeOfItems },
// });

// export const setCurrentPage = (currentPage) => ({
//   type: SET_CURRENT_PAGE,
//   payload: { currentPage },
// });

// export const setPageCount = (pageCount) => ({
//   type: SET_PAGE_COUNT,
//   payload: { pageCount },
// });

// export const setItemCount = (itemCount) => ({
//   type: SET_ITEM_COUNT,
//   payload: { itemCount },
// });

// export const setCurrentItemCount = (currentItemCount) => ({
//   type: SET_CURRENT_ITEM_COUNT,
//   payload: { currentItemCount },
// });
