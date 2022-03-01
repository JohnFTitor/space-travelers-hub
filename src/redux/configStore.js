import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';

const reducer = combineReducers({
  missions,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
