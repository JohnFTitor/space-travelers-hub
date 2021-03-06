import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missions from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';

const reducer = combineReducers({
  missions,
  rocketsReducer,
});

function render(
  ui,
  {
    preloadedState,
    store = createStore(reducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.objectOf(String).isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
