##### LocalActors :

###### Sidebar local actors on mobile with tile:

```jsx
import { Collapse } from '../Collapse';
import { LocalActors } from './index';

<div style={{ maxWidth: '380px', padding: '25px 10px', background: '#eeeeee' }}>
  <Collapse title="LES ASSOCIATIONS LES PLUS ACTIVES" withTileStyle>
    <LocalActors
      questionId="66a9230b-08cb-4f37-8ed8-aa95a8eac19a"
      slug="environnement"
    />
  </Collapse>
</div>;
```

###### Sidebar local actors on desktop without tile:

```jsx
import { TileWithTitle } from '../TileWithTitle';
import { LocalActors } from './index';

<div style={{ maxWidth: '380px', padding: '25px 10px', background: '#eeeeee' }}>
  <TileWithTitle title="LES ASSOCIATIONS LES PLUS ACTIVES">
    <LocalActors
      questionId="66a9230b-08cb-4f37-8ed8-aa95a8eac19a"
      slug="environnement"
    />
  </TileWithTitle>
</div>;
```
