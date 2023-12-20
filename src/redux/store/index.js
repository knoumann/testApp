import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from '../../network/saga';
import {appReducer} from '../reducers';

const sagaMiddleWare = createSagaMiddleware();
// Adding Middleware in the store
export const store = configureStore({
  reducer: appReducer,
  middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(rootSaga);
