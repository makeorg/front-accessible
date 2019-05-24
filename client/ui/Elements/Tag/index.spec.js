import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { Tag } from './index';

jest.mock('./Styled', () => ({
  TagStyle: 'TagStyle',
  TagButtonStyle: 'TagButtonStyle',
  TagIconStyle: 'TagIconStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgClose: 'SvgClose',
}));

describe('ComponentStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<Tag name="Hello" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between default vs Button Tag', () => {
    const defaultTag = renderer.create(<Tag name="Hello" />).toJSON();
    const buttonTag = renderer.create(<Tag name="Hello" isAButton />).toJSON();
    expect(snapshotDiff(defaultTag, buttonTag)).toMatchSnapshot();
  });

  it('must match the diff snapshot between Button vs Selected Button Tag', () => {
    const buttonTag = renderer.create(<Tag name="Hello" isAButton />).toJSON();
    const selectedButtonTag = renderer
      .create(<Tag name="Hello" isAButton isSelected />)
      .toJSON();
    expect(snapshotDiff(buttonTag, selectedButtonTag)).toMatchSnapshot();
  });
});
