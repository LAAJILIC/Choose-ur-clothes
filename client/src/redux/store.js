import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from './root-reducer';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

const sagaMiddeleware = createSagaMiddleware();
const middlewares = [sagaMiddeleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddeleware.run(rootSaga);

export const persistor = persistStore(store);

