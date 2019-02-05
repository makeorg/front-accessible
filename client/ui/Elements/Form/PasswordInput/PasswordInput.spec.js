import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { PasswordInput } from './index';

describe('PasswordInput', () => {
  const defaultProps = {
    type: 'foo',
    name: 'bar',
    icon: faLock,
    value: 'baz',
    label: 'qux',
    handleChange: () => {},
    togglePasswordIsDisplayed: () => {}
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(
      <PasswordInput {...defaultProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <PasswordInput {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer.create(
      <PasswordInput {...defaultProps} tabIndex="0" />
    );
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when password is displayed vs hidden', () => {
    const ShowPassword = renderer.create(
      <PasswordInput {...defaultProps} passwordIsDisplayed />
    );
    const HidePassword = renderer.create(
      <PasswordInput {...defaultProps} passwordIsDisplayed={false} />
    );
    expect(snapshotDiff(ShowPassword, HidePassword)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when password is required or optionnal', () => {
    const RequiredPassword = renderer.create(
      <PasswordInput {...defaultProps} required />
    );
    const OptionnalPassword = renderer.create(
      <PasswordInput {...defaultProps} required={false} />
    );
    expect(snapshotDiff(RequiredPassword, OptionnalPassword)).toMatchSnapshot();
  });
});
