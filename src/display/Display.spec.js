import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

afterEach(() => {
  cleanup();
});

describe('<Display />', () => {

  it('defaults to `unlocked` and `open`', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
  });

  it('displays "Closed" if the "closed" prop is "true" and "Open" if otherwise', () => {
    const { getByText, rerender } = render(<Display closed={true}/>);
    getByText('Closed');
    rerender(<Display closed={false}/>);
    getByText('Open');
  });

  it("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const { getByText, rerender } = render(<Display locked={true}/>);
    getByText('Locked');
    rerender(<Display  locked={false}/>);
    getByText('Unlocked');
  });

  it("uses the `red-led` class when `locked` or `closed` ", () => {
    const { getByText, rerender } = render(<Display locked={true}/>);
    const myDisplay = getByText('Locked');
    expect(myDisplay).toHaveProperty('className', 'led red-led');
    rerender(<Display closed={true}/>);
    const mySecondDisplay = getByText('Closed');
    expect(mySecondDisplay).toHaveProperty('className', 'led red-led');
  });

  it("uses the `green-led` class when `unlocked` or `open` ", () => {
    const { getByText, rerender } = render(<Display locked={false}/>);
    const myDisplay = getByText('Unlocked');
    expect(myDisplay).toHaveProperty('className', 'led green-led');
    rerender(<Display closed={false}/>);
    const mySecondDisplay = getByText('Open');
    expect(mySecondDisplay).toHaveProperty('className', 'led green-led');
  });
});