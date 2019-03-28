import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { CheckBox } from './index';

jest.mock('Client/ui/Elements/Form/Styled/CheckBox', () => ({
  FakeCheckboxInputStyle: 'FakeCheckboxInputStyle',
  CheckboxLabelStyle: 'CheckboxLabelStyle',
  CheckboxWrapper: 'CheckboxWrapper',
}));

jest.mock('Client/ui/Elements/Form/Styled/Icons', () => ({
  CheckboxIconStyle: 'CheckboxIconStyle',
}));

describe('CheckBox', () => {
  const defaultProps = {
    id: 'foo',
    name: 'bar',
    label: 'baz',
  };

  it('must return the diff between snapshot when checkbox is required or optionnal', () => {
    const RequiredCheckbox = renderer
      .create(<CheckBox {...defaultProps} required />)
      .toJSON();
    const OptionnalCheckbox = renderer
      .create(<CheckBox {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(RequiredCheckbox, OptionnalCheckbox)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when checkbox has a defined value or not', () => {
    const CheckboxWithValue = renderer
      .create(<CheckBox {...defaultProps} value="qux" />)
      .toJSON();
    const DefaultCheckbox = renderer
      .create(<CheckBox {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(CheckboxWithValue, DefaultCheckbox)).toMatchSnapshot();
  });
});
