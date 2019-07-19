import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { UntypedInput } from './index';

jest.mock('Client/ui/Elements/Form/Styled/Input', () => ({
  BasicInputStyle: 'BasicInputStyle',
}));

jest.mock('Client/ui/Elements/Form/Styled/Content', () => ({
  MiddleFakeFieldStyle: 'MiddleFakeFieldStyle',
  FloatingLabelStyle: 'FloatingLabelStyle',
  FieldWrapperStyle: 'FieldWrapperStyle',
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
  it('must return the diff between snapshot when input is required or optionnal', () => {
    const RequiredInput = renderer
      .create(<UntypedInput {...defaultProps} required />)
      .toJSON();
    const OptionnalInput = renderer
      .create(<UntypedInput {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(RequiredInput, OptionnalInput)).toMatchSnapshot();
  });
});
