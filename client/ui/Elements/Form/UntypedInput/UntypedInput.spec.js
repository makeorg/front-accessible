import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { UntypedInput } from './index';

jest.mock('Client/ui/Elements/Form/Styled/Input', () => ({
  MiddleFakeInputStyle: 'MiddleFakeInputStyle',
  BasicInputStyle: 'BasicInputStyle',
}));

jest.mock('Client/ui/Elements/Form/Styled/Icons', () => ({
  CenterInputIconStyle: 'CenterInputIconStyle',
}));

const defaultProps = {
  type: 'foo',
  name: 'bar',
  icon: 'SvgEnvelope',
  value: 'baz',
  label: 'qux',
  handleChange: () => {},
};

describe('UntypedInput', () => {
  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <UntypedInput {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer
      .create(<UntypedInput {...defaultProps} tabIndex="0" />)
      .toJSON();
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when input is required or optionnal', () => {
    const RequiredInput = renderer
      .create(<UntypedInput {...defaultProps} required />)
      .toJSON();
    const OptionnalInput = renderer
      .create(<UntypedInput {...defaultProps} required={false} />)
      .toJSON();
    expect(snapshotDiff(RequiredInput, OptionnalInput)).toMatchSnapshot();
  });
});
