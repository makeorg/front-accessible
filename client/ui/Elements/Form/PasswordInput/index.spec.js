import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { PasswordInput } from './index';

jest.mock('./Button', () => ({
  PasswordButton: 'PasswordButton',
}));

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

describe('PasswordInput', () => {
  const type = 'foo';
  const name = 'bar';
  const icon = 'SvgLock';
  const value = 'baz';
  const label = 'qux';
  const handleChange = () => {};
  const togglePasswordIsDisplayed = () => {};

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(
        <PasswordInput
          type={type}
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('must return the diff between snapshot when password is displayed vs hidden', () => {
    const ShowPassword = renderer
      .create(
        <PasswordInput
          type={type}
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
          passwordIsDisplayed
        />
      )
      .toJSON();
    const HidePassword = renderer
      .create(
        <PasswordInput
          type={type}
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
          passwordIsDisplayed={false}
        />
      )
      .toJSON();
    expect(snapshotDiff(ShowPassword, HidePassword)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when password is required or optionnal', () => {
    const RequiredPassword = renderer
      .create(
        <PasswordInput
          type={type}
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
          required
        />
      )
      .toJSON();
    const OptionnalPassword = renderer
      .create(
        <PasswordInput
          type={type}
          name={name}
          icon={icon}
          value={value}
          label={label}
          handleChange={handleChange}
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
        />
      )
      .toJSON();
    expect(snapshotDiff(RequiredPassword, OptionnalPassword)).toMatchSnapshot();
  });
});
