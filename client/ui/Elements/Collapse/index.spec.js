import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { Collapse } from './index';

jest.mock('Client/ui/Elements/Collapse/Styled', () => ({
  CollapseWrapperStyle: 'TileSeparatorStyle',
  CollapseTriggerStyle: 'CollapseTriggerStyle',
  CollapseIconStyle: 'CollapseIconStyle',
  CollapseContentStyle: 'CollapseContentStyle',
  CollapseSeparatorStyle: 'CollapseSeparatorStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgAngleArrowRight: 'SvgAngleArrowRight',
}));

jest.mock('Client/ui/Elements/TitleElements', () => ({
  ThirdLevelTitleStyle: 'ThirdLevelTitleStyle',
}));

describe('Collapse', () => {
  const defaultProps = {
    title: 'foo',
    children: 'bar',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<Collapse {...defaultProps} z />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between Expand vs Collapse Props', () => {
    const expandedComponent = renderer
      .create(<Collapse {...defaultProps} collapse={false} />)
      .toJSON();
    const defaultCollapse = renderer
      .create(<Collapse {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(expandedComponent, defaultCollapse)).toMatchSnapshot();
  });

  it('must match the diff snapshot between forceExpandOnDesktop vs default Props', () => {
    const forceExpandOnDesktop = renderer
      .create(<Collapse {...defaultProps} forceExpandOnDesktop />)
      .toJSON();
    const defaultCollapse = renderer
      .create(<Collapse {...defaultProps} />)
      .toJSON();
    expect(
      snapshotDiff(forceExpandOnDesktop, defaultCollapse)
    ).toMatchSnapshot();
  });
});
