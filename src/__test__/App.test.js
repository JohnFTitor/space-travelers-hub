import React from 'react';
import {
  waitFor,
  render,
  fireEvent,
  screen,
  cleanup,
} from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missions from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';
import '@testing-library/jest-dom';

const reducer = combineReducers({
  missions,
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(() => cleanup());

describe('Rockets and profile rockets', () => {
  test('Rockets are rendering', async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => screen.getByText('Falcon 1'));

    expect(container).toMatchSnapshot();
  });

  it('Profile renders reservations', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Rockets'));

    await waitFor(() => screen.getByText('Falcon 1'));

    fireEvent.click(screen.getByTestId(1));

    fireEvent.click(screen.getByText('My profile'));

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
  });
});

it('NavBar changes the section', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Missions'));

  await waitFor(() => screen.getByText('Thaicom'));

  expect(screen.getByTestId('missions-section')).toMatchSnapshot();
});
