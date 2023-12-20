import {all} from 'redux-saga/effects';
import {watchGetProducts} from './getProductsSaga';
import {watchPostProducts} from './postProductsSaga';

export default function* rootSaga() {
  yield all([watchGetProducts(), watchPostProducts()]);
}
