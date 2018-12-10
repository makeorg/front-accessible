import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Small } from 'Components/Elements/Separators';
import IntroCardComponent from './index';
import ProposalCard from '../Styled';

describe('IntroCardComponent', () => {

  it('Check a11y rules', () => {
    const wrapper = shallow(<IntroCardComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).to.equal(true);
    expect(wrapper.find(Small).prop('aria-hidden')).to.equal(true);
  });

});
