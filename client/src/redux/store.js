import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

const state = {
  data: {},
  // typeOfItems: 'stores',
  // currentPage: 1,
  // pageCount: 1,
  // itemCount: 0,
  // currentItemCount: 0,
};

const store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
