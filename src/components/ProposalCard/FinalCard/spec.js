import { shallow } from 'enzyme';
import FinalCardComponent from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProposalCard from '../Styled';

describe('FinalCardComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<FinalCardComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).to.equal(true);
  });

  it('Check Link open with target blank', () => {
    const wrapper = shallow(<FinalCardComponent />);

    expect(wrapper.find(ProposalCard.FinalLink).prop('target')).to.equal('_blank');
  });
});
