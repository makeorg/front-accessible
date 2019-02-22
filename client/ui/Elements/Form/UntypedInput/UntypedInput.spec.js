import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { UntypedInput } from './index';

describe('UntypedInput', () => {
  const defaultProps = {
    type: 'foo',
    name: 'bar',
    icon: faEnvelope,
    value: 'baz',
    label: 'qux',
    handleChange: () => {},
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<UntypedInput {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <UntypedInput {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer.create(
      <UntypedInput {...defaultProps} tabIndex="0" />
    );
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when input is required or optionnal', () => {
    const RequiredInput = renderer.create(
      <UntypedInput {...defaultProps} required />
    );
    const OptionnalInput = renderer.create(
      <UntypedInput {...defaultProps} required={false} />
    );
    expect(snapshotDiff(RequiredInput, OptionnalInput)).toMatchSnapshot();
  });
});
