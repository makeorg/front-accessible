import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { ProposalAuthorElement } from './index';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('Client/ui/Avatar', () => ({
  Avatar: 'Avatar',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgCheckedSymbol: 'SvgCheckedSymbol',
}));

jest.mock('Client/ui/Elements/LinkElements', () => ({
  RedLinkRouterStyle: 'RedLinkRouterStyle',
}));

jest.mock('./Styled', () => ({
  AuthorDescriptionStyle: 'AuthorDescriptionStyle',
  AuthorInfosStyle: 'AuthorInfosStyle',
  AuthorSeparatorStyle: 'AuthorSeparatorStyle',
  ProposalStatusStyle: 'ProposalStatusStyle',
}));

describe('ProposalAuthorElement', () => {
  it('must match the diff snapshot between default vs custom avatar', () => {
    const proposal = proposalTypeFixture;

    const authorWithoutAvatar = renderer
      .create(<ProposalAuthorElement proposal={proposal} />)
      .toJSON();

    const authorWithAvatar = renderer
      .create(<ProposalAuthorElement proposal={proposal} withAvatar />)
      .toJSON();

    expect(
      snapshotDiff(authorWithoutAvatar, authorWithAvatar)
    ).toMatchSnapshot();
  });
});
