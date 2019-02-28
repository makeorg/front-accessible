import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { SubmitButton } from './index';

jest.mock('Client/ui/Elements/ButtonElements', () => ({
  RedButtonStyle: 'RedButtonStyle',
  IconInButtonStyle: 'IconInButtonStyle',
  GreyButtonStyle: 'GreyButtonStyle',
}));

describe('SubmitButton', () => {
  const defaultProps = {
    formName: 'foo',
    label: 'bar',
    icon: faThumbsUp,
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

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const OneSubmit = renderer.create(
      <SubmitButton {...defaultProps} tabIndex="-1" />
    );
    const TwoSubmit = renderer
      .create(<SubmitButton {...defaultProps} tabIndex="0" />)
      .toJSON();
    expect(snapshotDiff(OneSubmit, TwoSubmit)).toMatchSnapshot();
  });
});
