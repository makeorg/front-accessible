/* @flow */

import { shallow } from 'enzyme';
import ProposalSubmitFormComponent from './index';
import ProposalSubmitButtonComponent from './Button';
import ProposalSubmitWrapper from './Styled';

describe('ProposalSubmitFormComponent', () => {

  it('Renders and Props', () => {
    const props = {
      canSubmit: true,
      length: 15,
      handleChange: () => {}
    };
    const wrapper = shallow(<ProposalSubmitFormComponent {...props} />);

    expect(wrapper.find(ProposalSubmitWrapper)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.Label)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.Label).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalSubmitWrapper.Input)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('onChange')).toBeInstanceOf(Function);
    expect(wrapper.find(ProposalSubmitWrapper.Label).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalSubmitWrapper.CharLimit)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitWrapper.CharLimit).first().text()).toBe('15/140');
    expect(wrapper.find(ProposalSubmitButtonComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitButtonComponent).prop('canSubmit')).toBe(true);
  });
});
