import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { PasswordButton } from './index';

jest.mock('Client/ui/Elements/Buttons/style', () => ({
  UnstyledButtonStyle: 'UnstyledButtonStyle',
}));

jest.mock('Client/ui/Elements/Form/Styled/Icons', () => ({
  HidePasswordIconStyle: 'HidePasswordIconStyle',
}));

describe('PasswordButton', () => {
  it('must return the diff between snapshot when password is displayed vs hidden', () => {
    const ShowPassword = renderer
      .create(<PasswordButton isPasswordDisplayed />)
      .toJSON();
    const HidePassword = renderer
      .create(<PasswordButton isPasswordDisplayed={false} />)
      .toJSON();
    expect(snapshotDiff(ShowPassword, HidePassword)).toMatchSnapshot();
  });
});
