import { shallow } from 'enzyme';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailButton } from 'Components/Elements/ButtonElements';
import { DescriptionLink } from 'Components/Elements/DescriptionElements';
import { Small } from 'Components/Elements/Separators';
import ProposalSubmitAuthentificationComponent from './index';

describe('ProposalSubmitAuthentificationComponent', () => {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
      sandbox.restore();
  });

  it('Check a11y rules', () => {
    const i18nextStub = sandbox.stub(i18next, 't');
    i18nextStub.withArgs('common.open_new_window').returns('Ouverture dans un nouvel onglet');
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);
    const DescriptionLinkIcon = wrapper.find(DescriptionLink).find(FontAwesomeIcon);
    const EmailButtonIcon = wrapper.find(EmailButton).find(FontAwesomeIcon);


    expect(wrapper.find(Small).prop('aria-hidden')).to.equal(true);
    expect(EmailButtonIcon.prop('aria-hidden')).to.equal(true);
    expect(DescriptionLinkIcon.prop('aria-label')).to.equal('Ouverture dans un nouvel onglet');
  });

  it('Check link target', () => {
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);

    expect(wrapper.find(DescriptionLink).prop('target')).to.equal('_blank');
  });

});
