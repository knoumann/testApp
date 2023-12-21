import {call, put, takeEvery} from 'redux-saga/effects';
import {makeNetworkCall} from '../..';
import {
  API_RESPONSE_SUCCESS,
  DEFAULT_ERROR_STRING,
  GET_PRODUCTS_API,
} from '../../../apis';
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from '../../../redux/reducers/getProducts';

export function fetchProducts(action) {
  const {headers, page} = action?.payload || {};
  const config = {
    headers: headers,
    method: 'GET',
    url: GET_PRODUCTS_API + page + '&limit=10',
  };
  return makeNetworkCall(config);
}

function* handleProductsData(action) {
  let genericMsg = DEFAULT_ERROR_STRING;
  try {
    const response = yield call(fetchProducts, action);
    const {data = {}} = response;
    genericMsg = response?.message || DEFAULT_ERROR_STRING;
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put(getProductsSuccess({data, page: action?.payload?.page}));
    } else {
      yield put(getProductsFailure(genericMsg));
    }
  } catch (error) {
    yield put(getProductsFailure(genericMsg));
  }
}

// Our watcher Saga
export function* watchGetProducts() {
  yield takeEvery(getProductsRequest, handleProductsData);
}
