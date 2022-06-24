import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders board, buttons, and roomba', () => {
  render(<App />);
  const move = screen.getByRole('button', {name: /move/i});
  expect(move).toBeInTheDocument();
  const rotate = screen.getByRole('button', {name: /rotate/i});
  expect(rotate).toBeInTheDocument();
  expect(screen.getByText(/up/i)).toBeInTheDocument();
  expect(screen.getByTestId('1-1')).toHaveTextContent('X');
  expect(screen.getByTestId('0-0')).toHaveTextContent('');
});
