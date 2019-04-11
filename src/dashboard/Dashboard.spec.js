import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

afterEach(() => {
  cleanup();
});

describe('<Dashboard />', () => {

  it('shows the controls and display', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });

  it('changes buttons\' text to reflect the state the door will be in if clicked', () => {
    const { getByText } = render(<Dashboard />);
    let myButton = getByText(/close gate/i);
    fireEvent.click(myButton);
    getByText(/open gate/i);
    myButton = getByText(/lock gate/i);
    fireEvent.click(myButton);
    getByText(/unlock gate/i);
  });
  
});
