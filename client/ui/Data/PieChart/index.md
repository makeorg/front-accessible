##### PieChart Example :
```jsx
import { MockedPieChartResults } from '../../../../shared/types/__fixtures__/results.fixture.js';
import { PieChart } from './index';
  <PieChart
    name={MockedPieChartResults.name}
    unit={MockedPieChartResults.unit}
    legend={MockedPieChartResults.legend}
    data={MockedPieChartResults.data}
  />
```