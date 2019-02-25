import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { TextArea } from './index';

jest.mock('../Styled', () => ({
  FakeInputStyle: 'FakeInputStyle',
  TextAreaIconStyle: 'TextAreaIconStyle',
  BasicTextAreaStyle: 'BasicTextAreaStyle',
}));

describe('TextArea', () => {
  const defaultProps = {
    name: 'bar',
    icon: faPenAlt,
    value: 'baz',
    label: 'qux',
    handleChange: () => {},
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<TextArea {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer
      .create(<TextArea {...defaultProps} tabIndex="-1" />)
      .toJSON();
    const PositiveTabIndex = renderer
      .create(<TextArea {...defaultProps} tabIndex="0" />)
      .toJSON();
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea is required or optionnal', () => {
    const RequiredTextArea = renderer
      .create(<TextArea {...defaultProps} required />)
      .toJSON();
    const OptionnalTextArea = renderer
      .create(<TextArea {...defaultProps} required={false} />)
      .toJSON();
    expect(snapshotDiff(RequiredTextArea, OptionnalTextArea)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea has a limit of characters or not', () => {
    const NoLimitTextArea = renderer
      .create(<TextArea {...defaultProps} />)
      .toJSON();
    const LimitedTextArea = renderer
      .create(<TextArea {...defaultProps} minLength="25" maxLength="450" />)
      .toJSON();
    expect(snapshotDiff(NoLimitTextArea, LimitedTextArea)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea has a enable vs disable spellchecking', () => {
    const EnabledSpellchecking = renderer
      .create(<TextArea {...defaultProps} />)
      .toJSON();
    const DisabledSpellchecking = renderer
      .create(<TextArea {...defaultProps} spellCheck={false} />)
      .toJSON();
    expect(
      snapshotDiff(EnabledSpellchecking, DisabledSpellchecking)
    ).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea has a disable vs enable autocomplete', () => {
    const DisabledAutocomplete = renderer
      .create(<TextArea {...defaultProps} />)
      .toJSON();
    const EnabledAutocomplete = renderer
      .create(<TextArea {...defaultProps} autoComplete="on" />)
      .toJSON();
    expect(
      snapshotDiff(DisabledAutocomplete, EnabledAutocomplete)
    ).toMatchSnapshot();
  });
});
