/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitButtonComponent } from './Button';
import {
  ProposalSubmitFormStyle,
  ProposalLabelStyle,
  ProposalInputStyle,
  ProposalCharLimitStyle,
} from './Styled';

describe('ProposalSubmitFormComponent', () => {
  it('Renders and Props', () => {
    const props = {
      canSubmit: true,
      length: 15,
      handleChange: () => {},
    };
    const wrapper = shallow(<ProposalSubmitFormComponent {...props} />);

    expect(wrapper.find(ProposalSubmitFormStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalLabelStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalLabelStyle).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalInputStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalInputStyle).prop('autoCapitalize')).toBe(
      'none'
    );
    expect(wrapper.find(ProposalInputStyle).prop('autoComplete')).toBe('off');
    expect(wrapper.find(ProposalInputStyle).prop('spellCheck')).toBe(true);
    expect(wrapper.find(ProposalInputStyle).prop('maxLength')).toBe('140');
    expect(wrapper.find(ProposalInputStyle).prop('onChange')).toBeInstanceOf(
      Function
    );
    expect(wrapper.find(ProposalLabelStyle).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalCharLimitStyle)).toHaveLength(1);
    expect(
      wrapper
        .find(ProposalCharLimitStyle)
        .first()
        .text()
    ).toBe(
      '15proposal_submit.entred_chars/common.from140proposal_submit.available_chars'
    );
    expect(wrapper.find(ProposalSubmitButtonComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitButtonComponent).prop('canSubmit')).toBe(
      true
    );
  });
});
