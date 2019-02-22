import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { PasswordButton } from './index';

describe('PasswordButton', () => {
  it('must match the snapshot with defaultProps', () => {
    const component = renderer.create(<PasswordButton />);
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(<PasswordButton tabIndex="-1" />);
    const PositiveTabIndex = renderer.create(<PasswordButton tabIndex="0" />);
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when password is displayed vs hidden', () => {
    const ShowPassword = renderer.create(
      <PasswordButton passwordIsDisplayed />
    );
    const HidePassword = renderer.create(
      <PasswordButton passwordIsDisplayed={false} />
    );
    expect(snapshotDiff(ShowPassword, HidePassword)).toMatchSnapshot();
  });
});
