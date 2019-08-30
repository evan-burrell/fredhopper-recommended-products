import React from 'react';
import { render } from '@testing-library/react';
import Items from '../Items';
import { mockItems } from '../mockItems';

describe('Items', () => {
  const { container } = render(<Items list={mockItems} />);

  it('matches the rendered snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
