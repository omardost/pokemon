import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';


test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Anterior/i);
  expect(linkElement).toBeInTheDocument();
});
