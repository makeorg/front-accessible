import React from 'react';
import renderer from 'react-test-renderer';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { getTotalVotesCount, getVotesPercent } from 'Shared/helpers/voteResult';
import { DetailledResultItem } from './index';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('../Styled/Progress', () => ({
  DetailledItemStyle: 'DetailledItemStyle',
  VoteDataListStyle: 'VoteDataListStyle',
  VoteDataBoldItemStyle: 'VoteDataBoldItemStyle',
  VoteDataItemStyle: 'VoteDataItemStyle',
  QualificationDataListStyle: 'QualificationDataListStyle',
}));

jest.mock('Client/ui/Elements/Vote/Styled', () => ({
  IsVotedButtonStyle: 'IsVotedButtonStyle',
  ButtonIconWrapperStyle: 'ButtonIconWrapperStyle',
}));

const totalVotesCount = getTotalVotesCount(proposalTypeFixture.votes);
const votesPercent = getVotesPercent(
  proposalTypeFixture.votes,
  totalVotesCount
);

describe('DetailledResultItem', () => {
  const defaultProps = {
    vote: proposalTypeFixture.votes[0],
    votePercent: votesPercent[proposalTypeFixture.votes[0].voteKey],
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<DetailledResultItem {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
