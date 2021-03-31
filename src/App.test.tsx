import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/roomba fun/i);
  expect(linkElement).toBeInTheDocument();
  const board = screen.getByText('Board');
  expect(board).toBeInTheDocument();
  const move = screen.getByRole('button', {name: /move/i});
  expect(move).toBeInTheDocument();
});

// should have way more tests, such as edge & object detection