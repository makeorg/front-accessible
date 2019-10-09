import React from 'react';
import renderer from 'react-test-renderer';
import { MockedPieChartResults } from 'Shared/types/__fixtures__/results.fixture';
import { PieChart } from './index';

jest.mock('./Styled', () => ({
  PieChartWrapperStyle: 'PieChartWrapperStyle',
  PieChartTitleStyle: 'PieChartTitleStyle',
  PieChartLegendStyle: 'PieChartLegendStyle',
  PieChartCanvasStyle: 'PieChartCanvasStyle',
}));

jest.mock('Client/ui/Elements/HiddenElements', () => ({
  HiddenItemStyle: 'HiddenItemStyle',
}));

describe('PieChart', () => {
  it('snapshot by default', () => {
    const component = renderer
      .create(
        <PieChart
          name={MockedPieChartResults.name}
          unit={MockedPieChartResults.unit}
          legend={MockedPieChartResults.legend}
          data={MockedPieChartResults.data}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
