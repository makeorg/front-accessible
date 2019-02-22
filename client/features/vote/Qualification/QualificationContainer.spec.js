import React from 'react';
import { shallow } from 'enzyme';
import { QualificationComponent } from './QualificationComponent';
import { QualificationContainer } from './QualificationContainer';

describe('QualificationContainer', () => {
  const defaultProps = {
    qualifications: [],
    proposalId: 'foo',
    index: 1,
    tabIndex: 0,
    votedKey: 'foo',
  };

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<QualificationContainer {...defaultProps} />);

    const expectedProps = {
      ...defaultProps,
      handleQualification: () => {},
    };

    expect(wrapper.find(QualificationComponent)).toHaveLength(1);
    const QualificationComponentProps = wrapper
      .find(QualificationComponent)
      .first()
      .props();
    expect(QualificationComponentProps.proposalId).toBe(
      expectedProps.proposalId
    );
    expect(QualificationComponentProps.votedKey).toBe(expectedProps.votedKey);
    expect(QualificationComponentProps.qualifications).toBe(
      expectedProps.qualifications
    );
    expect(typeof QualificationComponentProps.handleQualification).toBe(
      'function'
    );
    expect(QualificationComponentProps.tabIndex).toBe(expectedProps.tabIndex);
  });
});
