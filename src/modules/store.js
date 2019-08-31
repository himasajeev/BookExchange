import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import combineReducers from './combineReducers';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
