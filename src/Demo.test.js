import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Demo` from './Demo ';

test('renders learn react link', () => {
  const { getByText } = render(<Demo />);
  const buttonElement = getByTestId('addIcon');
  expect(buttonElement).toBeInTheDocument();
});
