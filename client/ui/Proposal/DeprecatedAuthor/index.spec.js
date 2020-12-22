import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { DeprecatedProposalAuthor } from 'Client/ui/Proposal/DeprecatedAuthor';
import * as redux from 'react-redux';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('Client/ui/Proposal/Author', () => ({
  ProposalAuthorInformations: 'ProposalAuthorInformations',
}));

jest.mock('Client/ui/Avatar', () => ({
  Avatar: 'Avatar',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgCheckedSymbol: 'SvgCheckedSymbol',
  SvgEmptyAvatar: 'SvgEmptyAvatar',
}));

jest.mock('Client/ui/Elements/LinkElements', () => ({
  RedLinkRouterStyle: 'RedLinkRouterStyle',
}));

jest.mock('Client/ui/Proposal/DeprecatedAuthor/Styled', () => ({
  AuthorDescriptionStyle: 'AuthorDescriptionStyle',
  AuthorInfosStyle: 'AuthorInfosStyle',
  AuthorSeparatorStyle: 'AuthorSeparatorStyle',
  ProposalStatusStyle: 'ProposalStatusStyle',
  CertifiedIconStyle: 'CertifiedIconStyle',
  InfosWrapperStyle: 'InfosWrapperStyle',
}));

jest.spyOn(redux, 'useSelector').mockReturnValue({ country: 'FR' });

describe('DeprecatedProposalAuthor', () => {
  it('must match the diff snapshot between default vs custom avatar', () => {
    const proposal = proposalTypeFixture;

    const authorWithoutAvatar = renderer
      .create(<DeprecatedProposalAuthor proposal={proposal} />)
      .toJSON();

    const authorWithAvatar = renderer
      .create(<DeprecatedProposalAuthor proposal={proposal} withAvatar />)
      .toJSON();

    expect(
      snapshotDiff(authorWithoutAvatar, authorWithAvatar)
    ).toMatchSnapshot();
  });
});
