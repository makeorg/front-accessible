import { shallow } from 'enzyme';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailButton } from 'Client/ui/Elements/ButtonElements';
import { DescriptionLink } from 'Client/ui/Elements/DescriptionElements';
import { Small } from 'Client/ui/Elements/Separators';
import ProposalSubmitAuthentificationComponent from './index';

// mock
jest.mock('i18next')

describe('ProposalSubmitAuthentificationComponent', () => {

  it('Check a11y rules', () => {


    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);
    const DescriptionLinkIcon = wrapper.find(DescriptionLink).find(FontAwesomeIcon);
    const EmailButtonIcon = wrapper.find(EmailButton).find(FontAwesomeIcon);


    expect(wrapper.find(Small).prop('aria-hidden')).toBe(true);
    expect(EmailButtonIcon.prop('aria-hidden')).toBe(true);
    expect(DescriptionLinkIcon.prop('aria-label')).toBe("common.open_new_window");
  });

  it('Check link target', () => {
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);

    expect(wrapper.find(DescriptionLink).prop('target')).toBe('_blank');
  });

});
