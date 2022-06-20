import React from 'react';
import { render, screen } from '@testing-library/react';
import { BigCard } from './big-card';


test('renders learn react link', () => {
  render(<BigCard />);
  const linkElement = screen.getByText(/Weight/i);
  expect(linkElement).toBeInTheDocument();
});
