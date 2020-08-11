import React from 'react';
import { mount } from 'enzyme';
import { configureStore } from 'Shared/store';
import { Provider } from 'react-redux';
import { DeprecatedProposalSubmitDescription } from '.';

describe('DeprecatedProposalSubmitDescription', () => {
  const store = configureStore();
  const trackModerationLink = () => {};

  it('Render & Props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DeprecatedProposalSubmitDescription
          trackModerationLink={trackModerationLink}
        />
      </Provider>
    );
    expect(wrapper.find('a').prop('onClick')).toBe(trackModerationLink);
  });
});
