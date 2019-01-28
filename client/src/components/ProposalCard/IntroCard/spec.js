import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Small } from 'Src/components/Elements/Separators';
import IntroCardComponent from './index';
import ProposalCard from '../Styled';

describe('IntroCardComponent', () => {

  it('Check a11y rules', () => {
    const props = {
      configuration: { extraLogo: 'foo' },
      questionConfiguration: { color: 'foo'}
    };
    const wrapper = shallow(<IntroCardComponent {...props} />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).toBe(true);
    expect(wrapper.find(Small).prop('aria-hidden')).toBe(true);
  });

});
