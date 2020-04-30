import React from 'react';
import { mount } from 'enzyme';
import { configureStore } from 'Shared/store';
import { Provider } from 'react-redux';
import { ProposalSubmitDescription } from '.';

describe('ProposalSubmitDescription', () => {
  const store = configureStore();
  const trackModerationLink = () => {};

  it('Render & Props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProposalSubmitDescription trackModerationLink={trackModerationLink} />
      </Provider>
    );
    expect(wrapper.find('a').prop('onClick')).toBe(trackModerationLink);
  });
});
