import React from 'react';
import renderer from 'react-test-renderer';
import { LoginErrorMessage, MessageWithDynamicLabel } from './index';

describe('Form Error Messages', () => {
  it('snapshot LoginErrorMessage', () => {
    const component = renderer.create(<LoginErrorMessage />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('snapshot MessageWithDynamicLabel', () => {
    const component = renderer
      .create(
        <MessageWithDynamicLabel
          messageKey="foo_message_key"
          field="foo"
          labelKey="foo_label_key"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
