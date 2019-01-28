/* @flow */

import { shallow } from 'enzyme';
import { ProposalSubmitFormComponent } from './index';
import { ProposalSubmitButtonComponent } from './Button';
import ProposalSubmitWrapper from './Styled';

describe('ProposalSubmitFormComponent', () => {

  it('Renders and Props', () => {
    const props = {
      canSubmit: true,
      length: 15,
      handleChange: () => { }
    };
    const wrapper = shallow(<ProposalSubmitFormComponent {...props} />);

    expect(wrapper.find(ProposalSubmitWrapper)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.Label)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.Label).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalSubmitWrapper.Input)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('autoCapitalize')).toBe('none');
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('autoComplete')).toBe('off');
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('spellCheck')).toBe(true);
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('maxLength')).toBe('140');
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('onChange')).toBeInstanceOf(Function);
    expect(wrapper.find(ProposalSubmitWrapper.Label).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalSubmitWrapper.CharLimit)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.CharLimit).first().text()).toBe('15proposal_submit.entred_chars/common.from140proposal_submit.available_chars');
    expect(wrapper.find(ProposalSubmitButtonComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitButtonComponent).prop('canSubmit')).toBe(true);
  });
});
