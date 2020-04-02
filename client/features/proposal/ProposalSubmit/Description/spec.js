import React from 'react';
import { mount } from 'enzyme';
import { configureStore } from 'Shared/store';
import { Provider } from 'react-redux';
import { ProposalSubmitDescriptionComponent } from '.';

describe('ProposalSubmitDescriptionComponent', () => {
  const store = configureStore();
  const props = {
    trackModerationLink: () => {},
  };

  it('Render & Props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProposalSubmitDescriptionComponent {...props} />
      </Provider>
    );
    expect(wrapper.find('a').prop('onClick')).toBe(props.trackModerationLink);
  });
});
