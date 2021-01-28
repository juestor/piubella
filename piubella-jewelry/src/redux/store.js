import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import roodReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(roodReducer, applyMiddleware(...middlewares));

export default store;