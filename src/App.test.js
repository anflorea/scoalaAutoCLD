import { render, screen } from '@testing-library/react';
import App from './App';

test('renders redirect button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Facebook/i);
  expect(linkElement).toBeInTheDocument();
});
