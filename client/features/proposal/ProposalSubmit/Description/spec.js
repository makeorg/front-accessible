import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitDescriptionComponent } from '.';

describe('ProposalSubmitDescriptionComponent', () => {
  const props = {
    trackModerationText: () => {},
    trackModerationLink: () => {},
  };

  it('Render & Props', () => {
    const wrapper = shallow(<ProposalSubmitDescriptionComponent {...props} />);
    expect(wrapper.find('a').prop('onClick')).toBe(props.trackModerationLink);
  });
});
