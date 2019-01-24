import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ProposalSubmitButtonComponent } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProposalButton, DisabledProposalButton } from '../Styled/ProposalField';

const enabledButtonProps = {
  canSubmit: true
};
const disabledButtonProps = {
  canSubmit: false
};
const collapsedField = {
  isFieldExpanded: false
};
const expandedField = {
  isFieldExpanded: true
};

describe('ProposalSubmitButtonComponent', () => {
  it('Renders enabled button', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent {...enabledButtonProps} />);

    expect(wrapper.find(ProposalButton)).toHaveLength(1);
    expect(wrapper.find(ProposalButton).prop('disabled')).toBeUndefined();
  });

  it('Renders disabled button', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent {...disabledButtonProps} />);

    expect(wrapper.find(DisabledProposalButton)).toHaveLength(1);
    expect(wrapper.find(DisabledProposalButton).prop('disabled')).toBe(true);
  });

  it('Check a11y rules', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).toBe(true);
  });
});


describe("ProposalSubmitButtonComponent snapshot", function () {
  it("must match the snapshot by default", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent />
    );
    expect(component).toMatchSnapshot();
  });

  it("must match the snapshot if user can't submit", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...disabledButtonProps} />
    );
    expect(component).toMatchSnapshot();
  });


  it("must match the snapshot if user can submit", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...enabledButtonProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it("must match the snapshot if field is collapsed", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...collapsedField} />
    );
    expect(component).toMatchSnapshot();
  });

  it("must match the snapshot if field is expanded", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...expandedField} />
    );
    expect(component).toMatchSnapshot();

  });
});
