import { shallow } from 'enzyme';
import PannelComponent from './';
import Pannel from './Styled';

describe('PannelComponent', () => {
  const props = {
    isPannelOpen: true,
    handleClose: () => {},
    children: 'foo'
  };

  it('Check a11y rules when pannel is open', () => {
    const wrapper = shallow(<PannelComponent {...props} />);

    expect(wrapper.find(Pannel).prop('translate')).to.equal(100);
    expect(wrapper.find(Pannel).prop('aria-hidden')).to.equal('false');
    expect(wrapper.find(Pannel.CloseButton).prop('aria-expanded')).to.equal('false');
    expect(wrapper.find(Pannel.CloseButton).prop('tabIndex')).to.equal(0);
  });

  it('Check a11y rules when pannel is close', () => {
    const closePannelProps = {
      ...props,
      isPannelOpen: false
    };

    const wrapper = shallow(<PannelComponent {...closePannelProps} />);

    expect(wrapper.find(Pannel).prop('translate')).to.equal(0);
    expect(wrapper.find(Pannel).prop('aria-hidden')).to.equal('true');
    expect(wrapper.find(Pannel.CloseButton).prop('aria-expanded')).to.equal('false');
    expect(wrapper.find(Pannel.CloseButton).prop('tabIndex')).to.equal(-1);
  });

  it('pannel contain chilren props', () => {
    const childrenProps = {
      ...props,
      children: '<p>Foo bar</p>'
    };

    const wrapper = shallow(<PannelComponent {...childrenProps} />);

    expect(wrapper.find(Pannel.Content).text()).to.equal('<p>Foo bar</p>');
  });
});
