import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProposalCard from './Styled';
import ProposalCardComponent from './';

describe('ProposalCardComponent', () => {

  it('Check a11y rules', () => {
    const proposal = {
      author: {
        firstname: 'foo'
      },
      content: 'il faut bar'
    }
    const wrapper = shallow(<ProposalCardComponent proposal={proposal} />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).to.equal('true');
    expect(wrapper.find(ProposalCard.Separator).prop('aria-hidden')).to.equal('true');
  });

});
