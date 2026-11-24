import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro greeting', () => {
  render(<App />);
  const greeting = screen.getByText(/hi there, i'm/i);
  expect(greeting).toBeInTheDocument();
});
