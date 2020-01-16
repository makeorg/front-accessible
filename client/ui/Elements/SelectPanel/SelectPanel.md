##### SelectPanel :

###### SelectedPanel to sort:

```jsx
import { SelectPanel } from './index';
import { SortedList } from '../SortedList';

const availableSorts = [
  'TAGGED_FIRST',
  'ACTORS',
  'RECENT',
  'REALISTIC',
  'CONTROVERSY',
  'POPULAR',
];

<div style={{ maxWidth: '380px', padding: '25px 10px', background: '#eeeeee' }}>
  <SelectPanel text="Les plus récents">
    <SortedList
      currentSort="ACTORS"
      availableSorts={availableSorts}
      setSort={() => {}}
    />
  </SelectPanel>
</div>;
```

###### SelectedPanel to filter:

```jsx
import { SelectPanel } from './index';
import { TagList } from '../TagList';

const tags = [
  { tagId: 'tagId-1', label: 'Accessibilité', isSelected: true },
  { tagId: 'tagId-2', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-3', label: 'Sport', isSelected: false },
  { tagId: 'tagId-4', label: 'Mobilité', isSelected: true },
  { tagId: 'tagId-5', label: 'Taxation', isSelected: false },
  { tagId: 'tagId-6', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-7', label: 'Sport', isSelected: false },
];

<div style={{ maxWidth: '380px', padding: '25px 10px', background: '#eeeeee' }}>
  <SelectPanel text="Sélectionnez un ou plusieurs sujets">
    <TagList tags={tags} hasHeader={true} />
  </SelectPanel>
</div>;
```
