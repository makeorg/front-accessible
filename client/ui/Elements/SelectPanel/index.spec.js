import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { SelectPanel } from './index';

jest.mock('./style', () => ({
  SelectPanelWrapperStyle: 'SelectPanelWrapperStyle',
  SelectButtonStyle: 'SelectButtonStyle',
  PanelStyle: 'PanelStyle',
  ArrowStyle: 'ArrowStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgAngleArrowBottom: 'SvgAngleArrowBottom',
  SvgAngleArrowTop: 'SvgAngleArrowTop',
}));

jest.mock('../AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

describe('SelectPanel', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<SelectPanel text="foo">Bar</SelectPanel>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between shouldHighlight vs Default Props', () => {
    const shouldHighlightComponent = renderer
      .create(
        <SelectPanel text="foo" shouldHighlight>
          Bar
        </SelectPanel>
      )
      .toJSON();
    const defaultSelectPanel = renderer
      .create(<SelectPanel text="foo">Bar</SelectPanel>)
      .toJSON();
    expect(
      snapshotDiff(shouldHighlightComponent, defaultSelectPanel)
    ).toMatchSnapshot();
  });

  it('must match the diff snapshot between selectedElements vs Default Props', () => {
    const selectedElementsComponent = renderer
      .create(
        <SelectPanel text="foo" selectedElements={2}>
          Bar
        </SelectPanel>
      )
      .toJSON();
    const defaultSelectPanel = renderer
      .create(<SelectPanel text="foo">Bar</SelectPanel>)
      .toJSON();
    expect(
      snapshotDiff(selectedElementsComponent, defaultSelectPanel)
    ).toMatchSnapshot();
  });
});
