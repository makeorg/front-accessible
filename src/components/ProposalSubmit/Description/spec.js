import { shallow } from 'enzyme';
import ProposalSubmitDescriptionComponent from './';
import { DescriptionLink } from '../../Elements/DescriptionElements';

describe('ProposalSubmitDescriptionComponent', () => {
  const props = {
    isPannelOpen: false,
    trackModerationText: () => {},
    trackModerationLink: () => {}
  };

  it('Render & Props', () => {
    const wrapper = shallow(<ProposalSubmitDescriptionComponent {...props} />);
    expect(wrapper.find(DescriptionLink).prop('tabIndex')).to.equal(0);
    expect(wrapper.find(DescriptionLink).prop('onClick')).to.equal(props.trackModerationLink);
  });
});
