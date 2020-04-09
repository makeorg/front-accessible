// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { Qualification } from './index';
import { QualificationButton } from './Button';

describe('ProposalSubmitContainer', () => {
  const defaultProps = {
    qualifications: [
      {
        qualificationKey: 'doNotUnderstand',
        count: 2,
        hasQualified: false,
      },
      {
        qualificationKey: 'noOpinion',
        count: 4,
        hasQualified: false,
      },
      {
        qualificationKey: 'doNotCare',
        count: 6,
        hasQualified: false,
      },
    ],
    votedKey: 'neutral',
    proposalId: 'fooProposalId',
    proposalKey: 'fooProposalKey',
    index: 2,
  };

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<Qualification {...defaultProps} />);

    const QualifyButtonProps = wrapper
      .find(QualificationButton)
      .first()
      .props();

    expect(QualifyButtonProps.qualification).toBe(
      defaultProps.qualifications[0]
    );
    expect(QualifyButtonProps.votedKey).toBe(defaultProps.votedKey);
    expect(QualifyButtonProps.proposalId).toBe(defaultProps.proposalId);
    expect(QualifyButtonProps.proposalKey).toBe(defaultProps.proposalKey);
    expect(QualifyButtonProps.index).toBe(defaultProps.index);

    expect(wrapper.find(LoadingDots)).toHaveLength(0);
  });
});
