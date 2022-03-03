import React from 'react';
import {
  waitFor,
  render,
  fireEvent,
  screen,
  cleanup,
} from './test-util';
import App from '../App';
import '@testing-library/jest-dom';

afterEach(() => cleanup());

describe('Rockets and profile rockets', () => {
  test('Rockets are rendering', async () => {
    const { container } = render(<App />);

    await waitFor(() => screen.getByText('Falcon 1'));

    expect(container).toMatchSnapshot();
  });

  it('Profile renders reservations', async () => {
    render(<App />);

    await waitFor(() => screen.getByText('Falcon 1'));

    fireEvent.click(screen.getByTestId(1));

    fireEvent.click(screen.getByText('My profile'));

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
  });
});

it('NavBar changes the section', async () => {
  render(<App />);

  fireEvent.click(screen.getByText('Missions'));

  await waitFor(() => screen.getByText('Thaicom'));

  expect(screen.getByTestId('missions-section')).toMatchSnapshot();
});
