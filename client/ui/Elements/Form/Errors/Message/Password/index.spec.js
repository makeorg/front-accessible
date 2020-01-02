import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { Provider } from 'react-redux';
import { configureStore } from 'Shared/store';
import { ErrorMessageForgotPassword } from './index';

describe('Error Message Forgot Password', () => {
  it('snapshot ErrorMessageForgotPassword', () => {
    const component = renderer
      .create(
        <Provider store={configureStore()}>
          <ErrorMessageForgotPassword />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('snapshot ErrorMessageForgotPassword default vs custom label', () => {
    const RequiredTextArea = renderer
      .create(
        <Provider store={configureStore()}>
          <ErrorMessageForgotPassword />
        </Provider>
      )
      .toJSON();
    const OptionnalTextArea = renderer
      .create(
        <Provider store={configureStore()}>
          <ErrorMessageForgotPassword inputId="foo" labelText="fooLabelText" />
        </Provider>
      )
      .toJSON();
    expect(snapshotDiff(RequiredTextArea, OptionnalTextArea)).toMatchSnapshot();
  });
});
