/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import { configureStore } from 'Shared/store';
import { Provider } from 'react-redux';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitButtonComponent } from './Button';
import {
  ProposalSubmitFormStyle,
  ProposalLabelStyle,
  ProposalTextareaStyle,
} from './Styled';

jest.mock('Shared/constants/proposal', () => ({
  getBaitText: () => 'should',
  MAX_PROPOSAL_LENGTH: 35,
}));
const store = configureStore();

describe('ProposalSubmitFormComponent', () => {
  it('Renders and Props', () => {
    const props = {
      canSubmit: true,
      length: 15,
    };
    const wrapper = mount(
      <Provider store={store}>
        <ProposalSubmitFormComponent {...props} />
      </Provider>
    );

    expect(wrapper.find(ProposalSubmitFormStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalLabelStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalLabelStyle).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalTextareaStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalTextareaStyle).prop('autoCapitalize')).toBe(
      'none'
    );
    expect(wrapper.find(ProposalTextareaStyle).prop('autoComplete')).toBe(
      'off'
    );
    expect(wrapper.find(ProposalTextareaStyle).prop('spellCheck')).toBe(true);
    expect(wrapper.find(ProposalTextareaStyle).prop('maxLength')).toBe(
      35 - 'should'.length
    );
    expect(wrapper.find(ProposalLabelStyle).prop('htmlFor')).toBe('proposal');
    expect(wrapper.find(ProposalSubmitButtonComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitButtonComponent).prop('canSubmit')).toBe(
      true
    );
  });
});
