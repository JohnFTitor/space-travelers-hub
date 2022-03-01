import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missions,
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
