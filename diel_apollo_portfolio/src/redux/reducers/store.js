import { createStore, combineReducers } from 'redux';
import menuReducer from '../actions/index';

const rootReducer = combineReducers({
  menuStore: menuReducer,
});

const store = createStore(rootReducer);

export default store;
