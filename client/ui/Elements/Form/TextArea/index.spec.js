import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { TextArea } from './index';

jest.mock('../Styled/Input', () => ({
  FakeFieldStyle: 'FakeFieldStyle',
}));

jest.mock('../Styled/TextArea', () => ({
  TextAreaIconStyle: 'TextAreaIconStyle',
  BasicTextAreaStyle: 'BasicTextAreaStyle',
  TextAreaCounterStyle: 'TextAreaCounterStyle',
}));

const name = 'bar';
const icon = 'SvgPencil';
const value = 'baz';
const label = 'qux';
const handleChange = () => {};

describe('TextArea', () => {
  it('must return the diff between snapshot when TextArea is required or optionnal', () => {
    const RequiredTextArea = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          required
        />
      )
      .toJSON();
    const OptionnalTextArea = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          required={false}
        />
      )
      .toJSON();
    expect(snapshotDiff(RequiredTextArea, OptionnalTextArea)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea has a limit of characters or not', () => {
    const NoLimitTextArea = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
        />
      )
      .toJSON();
    const LimitedTextArea = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          minLength="25"
          maxLength="450"
        />
      )
      .toJSON();
    expect(snapshotDiff(NoLimitTextArea, LimitedTextArea)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea has a enable vs disable spellchecking', () => {
    const EnabledSpellchecking = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
        />
      )
      .toJSON();
    const DisabledSpellchecking = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          spellCheck={false}
        />
      )
      .toJSON();
    expect(
      snapshotDiff(EnabledSpellchecking, DisabledSpellchecking)
    ).toMatchSnapshot();
  });

  it('must return the diff between snapshot when TextArea has a disable vs enable autocomplete', () => {
    const DisabledAutocomplete = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
        />
      )
      .toJSON();
    const EnabledAutocomplete = renderer
      .create(
        <TextArea
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          autoComplete="on"
        />
      )
      .toJSON();
    expect(
      snapshotDiff(DisabledAutocomplete, EnabledAutocomplete)
    ).toMatchSnapshot();
  });
});
