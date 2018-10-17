import { shallow } from 'enzyme';
import ProposalSubmitFormComponent from './index';
import ProposalSubmitButtonComponent from './Button';
import ProposalSubmitWrapper from './Styled';

describe('ProposalSubmitFormComponent', () => {
  const props = {
    canSubmit: true,
    length: 15,
    handleChange: () => {}
  };

  it('Renders and Props', () => {
    const wrapper = shallow(<ProposalSubmitFormComponent {...props} />);

    expect(wrapper.find(ProposalSubmitWrapper)).to.have.length(1);
    expect(wrapper.find(ProposalSubmitWrapper.Label)).to.have.length(1);
    expect(wrapper.find(ProposalSubmitWrapper.Label).prop('htmlFor')).to.equal('proposal');
    expect(wrapper.find(ProposalSubmitWrapper.Input)).to.have.length(1);
    expect(wrapper.find(ProposalSubmitWrapper.Input).prop('onChange')).to.instanceof(Function);
    expect(wrapper.find(ProposalSubmitWrapper.Label).prop('htmlFor')).to.equal('proposal');
    expect(wrapper.find(ProposalSubmitWrapper.CharLimit)).to.have.length(1);
    expect(wrapper.find(ProposalSubmitWrapper.CharLimit).first().text()).to.equal('15 caractères entrés / sur 140 caractères disponibles');
    expect(wrapper.find(ProposalSubmitButtonComponent)).to.have.length(1);
    expect(wrapper.find(ProposalSubmitButtonComponent).prop('canSubmit')).to.equal(true);
  });
});
