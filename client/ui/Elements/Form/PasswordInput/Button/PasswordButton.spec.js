import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { PasswordButton } from './index';

jest.mock('Client/ui/Elements/ButtonElements', () => ({
  UnstyledButtonStyle: 'UnstyledButtonStyle',
}));

jest.mock('Client/ui/Elements/Form/Styled/Icons', () => ({
  HidePasswordIconStyle: 'HidePasswordIconStyle',
}));

describe('PasswordButton', () => {
  it('must match the snapshot with defaultProps', () => {
    const component = renderer.create(<PasswordButton />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(<PasswordButton tabIndex="-1" />);
    const PositiveTabIndex = renderer
      .create(<PasswordButton tabIndex="0" />)
      .toJSON();
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when password is displayed vs hidden', () => {
    const ShowPassword = renderer
      .create(<PasswordButton passwordIsDisplayed />)
      .toJSON();
    const HidePassword = renderer
      .create(<PasswordButton passwordIsDisplayed={false} />)
      .toJSON();
    expect(snapshotDiff(ShowPassword, HidePassword)).toMatchSnapshot();
  });
});
