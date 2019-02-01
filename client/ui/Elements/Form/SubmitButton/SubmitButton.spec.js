import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { SubmitButton } from './index';

describe('SubmitButton', () => {
  const defaultProps = {
    formName: 'foo',
    label: 'bar',
    icon: faThumbsUp
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(
      <SubmitButton {...defaultProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <SubmitButton {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer.create(
      <SubmitButton {...defaultProps} tabIndex="0" />
    );
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });
});
