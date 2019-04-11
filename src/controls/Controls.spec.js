import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

afterEach(() => {
  cleanup();
});

describe('<Controls />', () => {

  it('cannot be closed or opened if it is locked', () => {
    const { getByTestId } = render(<Controls locked={true}/>);
    const myButton = getByTestId('closeButton');
    expect(myButton).toHaveProperty('disabled', true)
  });

  it('provides buttons to toggle the `closed` and `locked` states.', () => {
    const { getByTestId } = render(<Controls/>);
    getByTestId('closeButton');
    getByTestId('lockButton');
  });

  it('disable the locked toggle button if the gate is open', () => {
    const { getByTestId } = render(<Controls closed={false}/>);
    const myButton = getByTestId('lockButton');
    expect(myButton).toHaveProperty('disabled', true)
  });
});

    
 