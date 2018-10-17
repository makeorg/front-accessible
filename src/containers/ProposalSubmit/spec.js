import { shallow } from 'enzyme';
import { ProposalSubmit } from './index';
import { ProposalSubmitAuthentification } from './';
import ProposalSubmitFormComponent from '../../components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from '../../components/ProposalSubmit/Description';
import ProposalSubmitAuthentificationContainer from './Authentification';
import ProposalSubmitWrapper from '../../components/ProposalSubmit/Styled';
describe('ProposalSubmitContainer', () => {
  const defaultProps = {
    content: 'foo',
    length: 10,
    canSubmit: true,
    needAuthentification: false
  };

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);

    expect(wrapper.find(ProposalSubmitFormComponent)).to.have.length(1);
    const proposalSubmitProps = wrapper.find(ProposalSubmitFormComponent).first().props();
    expect(proposalSubmitProps.content).to.be.equal(defaultProps.content);
    expect(proposalSubmitProps.length).to.be.equal(defaultProps.length);
    expect(proposalSubmitProps.canSubmit).to.be.equal(defaultProps.canSubmit);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).to.have.length(0);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).to.have.length(0);
  });

  it('Renders the Description', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);

    wrapper.setState({ isTyping: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).to.have.length(1);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).to.have.length(0);
  });

  it('Renders the Authentification', () => {
    const needAuthentificationProps = {
      ...defaultProps,
      needAuthentification: true
    };
    const wrapper = shallow(<ProposalSubmit {...needAuthentificationProps} />);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).to.have.length(0);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).to.have.length(1);
  });

});
