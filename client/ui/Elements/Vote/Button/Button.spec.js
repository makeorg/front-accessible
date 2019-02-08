import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { UnvoteButtonStyle, VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { VoteButtonElement } from './index';

describe('VoteButtonElement', () => {
  const defaultProps = {
    color: 'red',
    label: 'foo',
    icon: faThumbsUp
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(
      <VoteButtonElement {...defaultProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <VoteButtonElement {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer.create(
      <VoteButtonElement {...defaultProps} tabIndex="0" />
    );
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when proposal is qualified or not', () => {
    const ButtonIsVoted = renderer.create(
      <VoteButtonElement {...defaultProps} buttonType={UnvoteButtonStyle} />
    );
    const ButtonIsNotVoted = renderer.create(
      <VoteButtonElement {...defaultProps} buttonType={VoteButtonStyle} />
    );
    expect(snapshotDiff(ButtonIsVoted, ButtonIsNotVoted)).toMatchSnapshot();
  });
});
