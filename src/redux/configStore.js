import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
