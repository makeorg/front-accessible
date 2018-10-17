import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailButton } from '../../Elements/ButtonElements';
import { DescriptionLink } from '../../Elements/DescriptionElements';
import { Small } from '../../Elements/Separators';
import ProposalSubmitAuthentificationComponent from './';

describe('ProposalSubmitAuthentificationComponent', () => {

  it('Check a11y rules', () => {
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);
    const DescriptionLinkIcon = wrapper.find(DescriptionLink).find(FontAwesomeIcon);
    const EmailButtonIcon = wrapper.find(EmailButton).find(FontAwesomeIcon);

    expect(wrapper.find(Small).prop('aria-hidden')).to.equal('true');
    expect(EmailButtonIcon.prop('aria-hidden')).to.equal('true');
    expect(DescriptionLinkIcon.prop('aria-label')).to.equal('Ouverture dans un nouvel onglet');
  });

  it('Check link target', () => {
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);

    expect(wrapper.find(DescriptionLink).prop('target')).to.equal('_blank');
  });

});
