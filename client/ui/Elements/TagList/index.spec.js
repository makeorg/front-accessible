import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { TagList } from './index';

jest.mock('./style', () => ({
  TagListStyle: 'TagListStyle',
  TagButtonElementStyle: 'TagButtonElementStyle',
  TagListHeaderStyle: 'TagListHeaderStyle',
  TagElementUnderlinedStyle: 'TagElementUnderlinedStyle',
  TaglistWrapperStyle: 'TaglistWrapperStyle',
  TagListFooterStyle: 'TagListFooterStyle',
  TagLabelStyle: 'TagLabelStyle',
  CenterButtonStyle: 'CenterButtonStyle',
}));

jest.mock('Client/ui/Elements/Buttons/style', () => ({
  VoteIconStyle: 'VoteIconStyle',
}));

jest.mock('Client/ui/Elements/Form/SubmitButton/index', () => ({
  SubmitButton: 'SubmitButton',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgClose: 'SvgClose',
}));

jest.mock('../AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

const tagsArray = [
  { id: '1', label: 'foo', isSelected: true },
  { id: '2', label: 'bar', isSelected: false },
  { id: '3', label: 'baz', isSelected: false },
];

describe('TagList', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<TagList tags={tagsArray} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between tagsSelected vs Default Props', () => {
    const tagsSelectedComponent = renderer
      .create(<TagList tags={tagsArray} tagsSelected={2} />)
      .toJSON();
    const defaultTagList = renderer
      .create(<TagList tags={tagsArray} />)
      .toJSON();
    expect(
      snapshotDiff(tagsSelectedComponent, defaultTagList)
    ).toMatchSnapshot();
  });
});
