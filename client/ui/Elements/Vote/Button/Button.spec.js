import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import {
  IsVotedButtonStyle,
  VoteButtonStyle,
} from 'Client/ui/Elements/Vote/Styled';
import { VoteButtonElement } from './index';

jest.mock('Client/ui/Elements/Vote/Styled', () => ({
  ButtonStyle: 'ButtonStyle',
  IsVotedButtonStyle: 'IsVotedButtonStyle',
  VoteButtonStyle: 'VoteButtonStyle',
}));

describe('VoteButtonElement', () => {
  const defaultProps = {
    color: 'red',
    label: 'foo',
    icon: 'SvgThumbsup',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<VoteButtonElement {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot when proposal is qualified or not', () => {
    const ButtonIsVoted = renderer
      .create(
        <VoteButtonElement {...defaultProps} buttonType={IsVotedButtonStyle} />
      )
      .toJSON();
    const ButtonIsNotVoted = renderer
      .create(
        <VoteButtonElement {...defaultProps} buttonType={VoteButtonStyle} />
      )
      .toJSON();
    expect(snapshotDiff(ButtonIsVoted, ButtonIsNotVoted)).toMatchSnapshot();
  });
});
