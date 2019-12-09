import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { ProposalFooterWithTagElement } from './ProposalWithTag/index';
import { ProposalFooterWithQuestionElement } from './ProposalWithQuestion/index';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('./Styled', () => ({
  ProposalFooterStyle: 'ProposalFooterStyle',
  PostedInLabelStyle: 'PostedInLabelStyle',
  ProposalFooterTagListStyle: 'ProposalFooterTagListStyle',
  ProposalFooterTagListItemStyle: 'ProposalFooterTagListItemStyle',
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
      .create(
        <BrowserRouter>
          <ProposalFooterWithQuestionElement {...props} />
        </BrowserRouter>
      )
      .toJSON();

    const refusedProposalFooter = renderer
      .create(
        <BrowserRouter>
          <ProposalFooterWithQuestionElement
            {...props}
            isProposalAccepted={false}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(
      snapshotDiff(defaultProposalFooter, refusedProposalFooter)
    ).toMatchSnapshot();
  });
});
