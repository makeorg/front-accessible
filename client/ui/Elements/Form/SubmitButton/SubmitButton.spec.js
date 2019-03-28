import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { SubmitButton } from './index';

jest.mock('Client/ui/Elements/ButtonElements', () => ({
  RedButtonStyle: 'RedButtonStyle',
  IconWrapperStyle: 'IconWrapperStyle',
  GreyButtonStyle: 'GreyButtonStyle',
}));

describe('SubmitButton', () => {
  const defaultProps = {
    formName: 'foo',
    label: 'bar',
    icon: 'SvgThumbsUp',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<SubmitButton {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between when disabled', () => {
    const OneSubmit = renderer.create(<SubmitButton {...defaultProps} />);
    const TwoSubmit = renderer
      .create(<SubmitButton {...defaultProps} disabled />)
      .toJSON();
    expect(snapshotDiff(OneSubmit, TwoSubmit)).toMatchSnapshot();
  });
});
