import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProposalCard from '../Styled';
import { Small } from '../../Elements/Separators';
import IntroCardComponent from './';

describe('IntroCardComponent', () => {

  it('Check a11y rules', () => {
    const wrapper = shallow(<IntroCardComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).to.equal(true);
    expect(wrapper.find(Small).prop('aria-hidden')).to.equal(true);
  });

});
