/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import { configureStore } from 'Shared/store';
import { Provider } from 'react-redux';
import { ProposalSubmitForm } from './index';
import { ProposalSubmitButton } from '../Button';
import {
  ProposalSubmitFormStyle,
  ProposalLabelStyle,
  ProposalTextareaStyle,
} from '../style';

jest.mock('Shared/constants/proposal', () => ({
  getBaitText: () => 'should',
  MAX_PROPOSAL_LENGTH: 35,
}));
const store = configureStore();

describe('ProposalSubmitForm', () => {
  it('Renders and Props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProposalSubmitForm canSubmit length={15} />
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
    expect(wrapper.find(ProposalSubmitButton)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitButton).prop('canSubmit')).toBe(true);
  });
});
