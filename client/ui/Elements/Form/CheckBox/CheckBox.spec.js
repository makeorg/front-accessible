import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { CheckBox } from './index';

describe('CheckBox', () => {
  const defaultProps = {
    id: 'foo',
    name: 'bar',
    label: 'baz',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<CheckBox {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <CheckBox {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer
      .create(<CheckBox {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

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
