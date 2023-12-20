import {combineReducers} from 'redux';
import getProducts from './getProducts';
import postProducts from './postProducts';
export const appReducer = combineReducers({
  getProducts: getProducts,
  postProducts: postProducts,
});
