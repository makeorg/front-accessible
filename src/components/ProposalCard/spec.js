import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProposalCard from './Styled';
import ProposalCardComponent from './';

describe('ProposalCardComponent', () => {

  it('Check a11y rules', () => {
    const wrapper = shallow(<ProposalCardComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).to.equal('true');
    expect(wrapper.find(ProposalCard.Sep).prop('aria-hidden')).to.equal('true');
  });

});
