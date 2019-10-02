import React from 'react';
import renderer from 'react-test-renderer';
import { MockedResults } from 'Shared/types/__fixtures__/results.fixture';
import { PieChart } from './index';

jest.mock('./Styled', () => ({
  WrapperStyle: 'WrapperStyle',
  PieChartCanvasStyle: 'PieChartCanvasStyle',
}));

jest.mock('Client/ui/Elements/HiddenElements', () => ({
  HiddenItemStyle: 'HiddenItemStyle',
}));

describe('CardStyle', () => {
  it('snapshot by default', () => {
    const component = renderer
      .create(
        <PieChart
          name={MockedResults.name}
          legend={MockedResults.legend}
          data={MockedResults.data}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
