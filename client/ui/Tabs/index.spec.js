import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { Tabs } from './index';

const defaultProps = [
  {
    tab: 'fooTab',
    panel: 'fooPanel',
  },
  {
    tab: 'barTab',
    panel: 'barPanel',
  },
];

const disabledTabProps = [
  {
    tab: 'fooTab',
    panel: 'fooPanel',
    isDisabled: true,
  },
  {
    tab: 'barTab',
    panel: 'barPanel',
    isDisabled: true,
  },
];

describe('Tabs', () => {
  it('toMatchSnapshot', () => {
    const component = renderer
      .create(<Tabs tabsContent={defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot when Tab is enabled vs disabled', () => {
    const enabledTabs = renderer
      .create(<Tabs tabsContent={defaultProps} />)
      .toJSON();
    const disabledTabs = renderer
      .create(<Tabs tabsContent={disabledTabProps} />)
      .toJSON();
    expect(snapshotDiff(enabledTabs, disabledTabs)).toMatchSnapshot();
  });
});
