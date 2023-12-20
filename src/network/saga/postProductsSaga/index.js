import {call, put, takeEvery} from 'redux-saga/effects';
import {makeNetworkCall} from '../..';
import {
  API_RESPONSE_SUCCESS,
  DEFAULT_ERROR_STRING,
  POST_PRODUCTS_API,
} from '../../../apis';
import {
  postProductsRequest,
  postProductsFailure,
  postProductsSuccess,
} from '../../../redux/reducers/postProducts';
import {Alert} from 'react-native';

export function fetchProducts(action) {
  const {headers, body} = action?.payload || {};
  const config = {
    headers: headers,
    method: 'POST',
    url: POST_PRODUCTS_API,
    data: body,
  };
  return makeNetworkCall(config);
}

function* handlePostProducts(action) {
  let genericMsg = DEFAULT_ERROR_STRING;
  try {
    const response = yield call(fetchProducts, action);
    const {data = {}} = response;
    genericMsg = response?.message || DEFAULT_ERROR_STRING;
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put(postProductsSuccess({data}));
      Alert.alert('data has been saved successfully');
    } else {
      yield put(postProductsFailure(genericMsg));
    }
  } catch (error) {
    yield put(postProductsFailure(genericMsg));
  }
}

// Our watcher Saga
export function* watchPostProducts() {
  yield takeEvery(postProductsRequest, handlePostProducts);
}
