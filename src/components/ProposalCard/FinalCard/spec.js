import { shallow } from 'enzyme';
import FinalCardComponent from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProposalCard from '../Styled';

describe('FinalCardComponent', () => {
  const props = {
    finalCardConfig: { customTitle: true },
    finalCardWording: { title: 'foo' },
  };

  it('Check a11y rules', () => {
    const wrapper = shallow(<FinalCardComponent {...props} />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).toBe(true);
  });
});
