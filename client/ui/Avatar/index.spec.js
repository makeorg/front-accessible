import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { Avatar } from './index';

jest.mock('Client/ui/Svg', () => ({ Svg: 'Svg' }));

describe('Avatar', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<Avatar />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with default vs custom Avatar', () => {
    const defaultAvatar = renderer.create(<Avatar />).toJSON();
    const customAvatar = renderer
      .create(<Avatar customAvatar>foo</Avatar>)
      .toJSON();
    expect(snapshotDiff(defaultAvatar, customAvatar)).toMatchSnapshot();
  });
});
