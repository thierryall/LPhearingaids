import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders promo banner text', () => {
  render(<App />);
  expect(screen.getByText(/limited stock available today/i)).toBeInTheDocument();
});
