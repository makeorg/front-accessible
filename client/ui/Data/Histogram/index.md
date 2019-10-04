##### Histrogram Example :
```jsx
import { MockedHistogramResults } from '../../../../shared/types/__fixtures__/results.fixture.js';
import { Histogram } from './index';
  <Histogram
    name={MockedHistogramResults.name}
    unit={MockedHistogramResults.unit}
    legend={MockedHistogramResults.legend}
    data={MockedHistogramResults.data}
  />
```

##### Histrogram with 2 bars Example :
```jsx
import { MockedHistogram2BarsResults } from '../../../../shared/types/__fixtures__/results.fixture.js';
import { Histogram } from './index';
  <Histogram
    name={MockedHistogram2BarsResults.name}
    unit={MockedHistogram2BarsResults.unit}
    legend={MockedHistogram2BarsResults.legend}
    data={MockedHistogram2BarsResults.data}
  />
```