import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders the <h1> title', () => {
  render(<App />);
  const element = screen.getByText(/search/i);
  expect(element).toBeInTheDocument();
});

test("should renders the input with the role 'search'", () => {
  render(<App />);
  const element = screen.getByRole('search');
  expect(element).toBeInTheDocument();
});

test("should renders the list of names and emails with the role 'list'", () => {
  render(<App />);
  const element = screen.getByRole('list');
  expect(element).toBeInTheDocument();
});