import main from '../src/main.js';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { build, fake } from 'test-data-bot';
import '@testing-library/jest-dom/extend-expect'


describe('', () => {
  it('', () => {
    const { getAllBy } = render(<main />);
    expect(getAllBy()).();
  })
});