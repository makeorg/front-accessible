import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitDescriptionComponent } from '.';

describe('ProposalSubmitDescriptionComponent', () => {
  const props = {
    isModalOpen: false,
    trackModerationText: () => {},
    trackModerationLink: () => {},
  };

  it('Render & Props', () => {
    const wrapper = shallow(<ProposalSubmitDescriptionComponent {...props} />);
    expect(wrapper.find('a').prop('tabIndex')).toBe(0);
    expect(wrapper.find('a').prop('onClick')).toBe(props.trackModerationLink);
  });
});
