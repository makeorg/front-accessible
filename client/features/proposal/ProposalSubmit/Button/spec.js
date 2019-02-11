import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProposalSubmitButtonComponent } from '.';
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


describe('ProposalSubmitButtonComponent snapshot', () => {
  it('must match the snapshot by default', () => {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent />
    );
    expect(component).toMatchSnapshot();
  });

  it("must match the snapshot if user can't submit", () => {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...disabledButtonProps} />
    );
    expect(component).toMatchSnapshot();
  });


  it('must match the snapshot if user can submit', () => {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...enabledButtonProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it('must match the snapshot if field is collapsed', () => {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...collapsedField} />
    );
    expect(component).toMatchSnapshot();
  });

  it('must match the snapshot if field is expanded', () => {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ProposalSubmitButtonComponent {...expandedField} />
    );
    expect(component).toMatchSnapshot();
  });
});