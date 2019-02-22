import React from 'react';
import { shallow } from 'enzyme';
import { DescriptionLinkStyle } from 'Client/ui/Elements/DescriptionElements';
import { ProposalSubmitDescriptionComponent } from '.';

describe('ProposalSubmitDescriptionComponent', () => {
  const props = {
    isPannelOpen: false,
    trackModerationText: () => {},
    trackModerationLink: () => {},
  };

  it('Render & Props', () => {
    const wrapper = shallow(<ProposalSubmitDescriptionComponent {...props} />);
    expect(wrapper.find(DescriptionLinkStyle).prop('tabIndex')).toBe(0);
    expect(wrapper.find(DescriptionLinkStyle).prop('onClick')).toBe(
      props.trackModerationLink
    );
  });
});
