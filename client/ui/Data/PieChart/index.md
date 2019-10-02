##### PieChart Example :
```jsx
import { MockedResults } from '../../../../shared/types/__fixtures__/results.fixture.js';
import { PieChart } from './index';
  <PieChart
    name={MockedResults.name}
    legend={MockedResults.legend}
    data={MockedResults.data}
  />
```