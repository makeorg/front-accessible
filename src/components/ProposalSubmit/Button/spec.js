import { shallow } from 'enzyme';
import ProposalSubmitButtonComponent from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProposalButton, DisabledProposalButton } from '../Styled/ProposalField';

describe('ProposalSubmitButtonComponent', () => {
  const enabledButtonProps = {
    canSubmit: true
  };
  const disabledButtonProps = {
    canSubmit: false
  };

  it('Renders enabled button', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent {...enabledButtonProps} />);

    expect(wrapper.find(ProposalButton)).to.have.length(1);
    expect(wrapper.find(ProposalButton).prop('disabled')).to.be.undefined;
  });

  it('Renders disabled button', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent {...disabledButtonProps} />);

    expect(wrapper.find(DisabledProposalButton)).to.have.length(1);
    expect(wrapper.find(DisabledProposalButton).prop('disabled')).to.equal(true);
  });

  it('Check a11y rules', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).to.equal(true);
  });
});
