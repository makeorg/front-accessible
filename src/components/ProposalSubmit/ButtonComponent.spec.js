import { shallow } from 'enzyme';
import ProposalSubmitButtonComponent from './ButtonComponent';
import { RedButton, GreyButton } from '../Elements/ButtonElements';

describe('ProposalSubmitButtonComponent', () => {
  const enabledButtonProps = {
    canSubmit: true
  };
  const disabledButtonProps = {
    canSubmit: false
  };

  it('renders enabled button', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent {...enabledButtonProps} />);

    expect(wrapper.find(RedButton)).to.have.length(1);
    expect(wrapper.find(RedButton).prop('disabled')).to.be.undefined;
  });

  it('renders disabled button', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent {...disabledButtonProps} />);

    expect(wrapper.find(GreyButton)).to.have.length(1);
    expect(wrapper.find(GreyButton).prop('disabled')).to.equal(true);
  });
});
