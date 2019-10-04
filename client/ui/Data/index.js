// @flow
import React from 'react';
import { HISTOGRAM_CHART, PIE_CHART } from 'Client/app/constants/elements';
import { PieChart } from './PieChart';
import { Histogram } from './Histogram';

type Props = {
  chart: any,
};

export const ChartType = ({ chart }: Props) => {
  switch (chart.type) {
    case PIE_CHART:
      return (
        <PieChart
          unit={chart.unit}
          name={chart.name}
          legend={chart.legend}
          data={chart.data}
        />
      );
    case HISTOGRAM_CHART:
      return (
        <Histogram
          unit={chart.unit}
          name={chart.name}
          legend={chart.legend}
          forcedHigherValue={chart.forcedHigherValue}
          data={chart.data}
        />
      );
    default:
      return null;
  }
};
