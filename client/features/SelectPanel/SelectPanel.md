##### SelectPanel :

###### SelectedPanel to sort:

```jsx
import { SelectPanel } from './index';
import { SortedList } from '../../ui/Elements/SortedList';

const availableSorts = [
  'TAGGED_FIRST',
  'ORGANIZATION',
  'RECENT',
  'REALISTIC',
  'CONTROVERSY',
  'POPULAR',
];

<SelectPanel text="Les plus récentes">
  <SortedList
    currentSort="ORGANIZATION"
    availableSorts={availableSorts}
    setSort={() => {}}
  />
</SelectPanel>;
```

###### SelectedPanel to filter:

```jsx
import { SelectPanel } from './index';
import { TagList } from '../../ui/Elements/TagList';

const tags = [
  { tagId: 'tagId-1', label: 'Accessibilité', isSelected: true },
  { tagId: 'tagId-2', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-3', label: 'Sport', isSelected: false },
  { tagId: 'tagId-4', label: 'Mobilité', isSelected: true },
  { tagId: 'tagId-5', label: 'Taxation', isSelected: false },
  { tagId: 'tagId-6', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-7', label: 'Sport', isSelected: false },
];

<SelectPanel text="Sélectionnez un ou plusieurs sujets">
  <TagList tags={tags} hasHeader={true} />
</SelectPanel>;
```
