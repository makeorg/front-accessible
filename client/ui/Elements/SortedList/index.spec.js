import React from 'react';
import renderer from 'react-test-renderer';
import { SortedList } from './index';

jest.mock('./style', () => ({
  SortedListStyle: 'SortedListStyle',
  SortedButtonStyle: 'SortedButtonStyle',
  SortedRadioStyle: 'SortedRadioStyle',
  CheckedStyle: 'CheckedStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgCheck: 'SvgCheck',
}));

const sortArray = ['foo', 'bar', 'baz'];

describe('SortedList', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<SortedList currentSort="foo" availableSorts={sortArray} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
