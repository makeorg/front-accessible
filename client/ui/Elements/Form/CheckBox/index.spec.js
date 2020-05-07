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
  const id = 'foo';
  const name = 'bar';
  const label = 'baz';

  it('must return the diff between snapshot when checkbox is required or optionnal', () => {
    const RequiredCheckbox = renderer
      .create(<CheckBox id={id} name={name} label={label} required />)
      .toJSON();
    const OptionnalCheckbox = renderer
      .create(<CheckBox id={id} name={name} label={label} />)
      .toJSON();
    expect(snapshotDiff(RequiredCheckbox, OptionnalCheckbox)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when checkbox has a defined value or not', () => {
    const CheckboxWithValue = renderer
      .create(<CheckBox id={id} name={name} label={label} value="qux" />)
      .toJSON();
    const DefaultCheckbox = renderer
      .create(<CheckBox id={id} name={name} label={label} />)
      .toJSON();
    expect(snapshotDiff(CheckboxWithValue, DefaultCheckbox)).toMatchSnapshot();
  });
});
