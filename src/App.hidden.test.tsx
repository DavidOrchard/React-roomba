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

test('Hits edge and rotates', () => {
  render(<App />);
  expect(screen.getByTestId('1-0')).toHaveTextContent('');
  expect(screen.getByText(/up/i)).toBeInTheDocument();
  const move = screen.getByRole('button', {name: /move/i});
  fireEvent.click(move);
  expect(screen.getByTestId('1-0')).toHaveTextContent('X');
  fireEvent.click(move);
  expect(screen.getByText(/right/i)).toBeInTheDocument();
});

test('rotates and goes right edge then bottom', () => {
  render(<App />);
  expect(screen.getByTestId('1-0')).toHaveTextContent('');
  expect(screen.getByText(/up/i)).toBeInTheDocument();
  const rotate = screen.getByRole('button', {name: /rotate/i});
  fireEvent.click(rotate);
  expect(screen.getByText(/right/i)).toBeInTheDocument();
  const move = screen.getByRole('button', {name: /move/i});
  [...Array(8)].forEach(() => fireEvent.click(move) );
  expect(screen.getByTestId('9-1')).toHaveTextContent('X');
  expect(screen.getByText(/right/i)).toBeInTheDocument();

  fireEvent.click(move);
  expect(screen.getByText(/down/i)).toBeInTheDocument();
  [...Array(8)].forEach((_, index) => {
    fireEvent.click(move);
    expect(screen.getByTestId(`9-${index + 2}`)).toHaveTextContent('X');
  });
  fireEvent.click(move);
  expect(screen.getByText(/left/i)).toBeInTheDocument();

});
