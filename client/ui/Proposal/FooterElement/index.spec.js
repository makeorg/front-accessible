import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import {
  ProposalFooterWithTagElement,
  ProposalFooterWithQuestionElement,
} from './index';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('Client/features/consultation/Styled/TagFilter', () => ({
  TagListItemStyle: 'TagListItemStyle',
}));

jest.mock('Client/ui/Elements/Tag', () => ({
  Tag: 'Tag',
}));

jest.mock('./Styled', () => ({
  ProposalTagListStyle: 'ProposalTagListStyle',
  ProposalFooterStyle: 'ProposalFooterStyle',
  PostedInLabelStyle: 'PostedInLabelStyle',
  RedLinkStyle: 'RedLinkStyle',
}));

describe('ProposalFooterWithTagElement', () => {
  const defaultProps = {
    tags: proposalTypeFixture.tags,
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<ProposalFooterWithTagElement {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('ProposalFooterWithQuestionElement', () => {
  it('must match the diff snapshot between default vs custom avatar', () => {
    const props = {
      question: proposalTypeFixture.question,
      consultationLink: 'fooLink',
    };

    const defaultProposalFooter = renderer
      .create(<ProposalFooterWithQuestionElement {...props} />)
      .toJSON();

    const refusedProposalFooter = renderer
      .create(
        <ProposalFooterWithQuestionElement
          {...props}
          isProposalAccepted={false}
        />
      )
      .toJSON();

    expect(
      snapshotDiff(defaultProposalFooter, refusedProposalFooter)
    ).toMatchSnapshot();
  });
});
