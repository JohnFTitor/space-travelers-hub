import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
