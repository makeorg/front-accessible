import { shallow } from 'enzyme';
import ProposalSubmitAuthentificationComponent from '../../components/ProposalSubmit/AuthentificationComponent';
import { ProposalSubmitAuthentification } from './AuthentificationContainer';

describe('ProposalSubmitAuthentificationContainer', () => {
  it('renders', () => {
    const props = {
      handleRegisterClick: () => {},
      handleLoginClick: () => {}
    }
    const wrapper = shallow(<ProposalSubmitAuthentification {...props} />);

    expect(wrapper.find(ProposalSubmitAuthentificationComponent)).to.have.length(1);
    const ProposalSubmitAuthentificationProps = wrapper.find(ProposalSubmitAuthentificationComponent).first().props();
    expect(ProposalSubmitAuthentificationProps.handleRegisterClick).to.be.equal(props.handleRegisterClick);
    expect(ProposalSubmitAuthentificationProps.handleLoginClick).to.be.equal(props.handleLoginClick);
  });
});
