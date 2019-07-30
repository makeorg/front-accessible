import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { ErrorMessageForgotPasswordComponent } from './index';

describe('Error Message Forgot Password', () => {
  it('snapshot ErrorMessageForgotPasswordComponent', () => {
    const component = renderer
      .create(
        <ErrorMessageForgotPasswordComponent
          handleForgotPasswordModal={() => {}}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('snapshot ErrorMessageForgotPasswordComponent default vs custom label', () => {
    const RequiredTextArea = renderer
      .create(
        <ErrorMessageForgotPasswordComponent
          handleForgotPasswordModal={() => {}}
        />
      )
      .toJSON();
    const OptionnalTextArea = renderer
      .create(
        <ErrorMessageForgotPasswordComponent
          handleForgotPasswordModal={() => {}}
          inputId="foo"
          labelText="fooLabelText"
        />
      )
      .toJSON();
    expect(snapshotDiff(RequiredTextArea, OptionnalTextArea)).toMatchSnapshot();
  });
});
