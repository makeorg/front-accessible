import { shallow } from 'enzyme';
import { ProposalSubmit } from './index';
import { ProposalSubmitAuthentification } from './AuthentificationContainer';
import ProposalSubmitComponent from '../../components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from '../../components/ProposalSubmit/DescriptionComponent';
import ProposalSubmitAuthentificationContainer from './AuthentificationContainer';
import ProposalSubmitWrapper from '../../components/ProposalSubmit/Styled';
describe('ProposalSubmit', () => {
  const defaultProps = {
    content: 'foo',
    length: 10,
    canSubmit: true,
    needAuthentification: false
  };

  it('renders default', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);

    expect(wrapper.find(ProposalSubmitComponent)).to.have.length(1);
    const proposalSubmitProps = wrapper.find(ProposalSubmitComponent).first().props();
    expect(proposalSubmitProps.content).to.be.equal(defaultProps.content);
    expect(proposalSubmitProps.length).to.be.equal(defaultProps.length);
    expect(proposalSubmitProps.canSubmit).to.be.equal(defaultProps.canSubmit);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).to.have.length(0);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).to.have.length(0);
  });

  it('renders the description component', () => {
    const needAuthentificationProps = {
      ...defaultProps,
      needAuthentification: true
    };
    const wrapper = shallow(<ProposalSubmit {...needAuthentificationProps} />);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).to.have.length(0);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).to.have.length(1);
  });
});
