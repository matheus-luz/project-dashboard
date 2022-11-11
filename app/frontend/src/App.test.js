import { render, screen } from '@testing-library/react';
import Login from './pages/Login';

test('renders learn react link', () => {
  render(<Login />);
  const input = screen.getByRole();
  expect(input).toBeInTheDocument();
});
