##### TagList :

###### TagList with header :

```jsx
import { TagList } from './index';

const tags = [
  { tagId: 'tagId-1', label: 'Accessibilité', isSelected: true },
  { tagId: 'tagId-2', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-3', label: 'Sport', isSelected: false },
  { tagId: 'tagId-4', label: 'Mobilité', isSelected: true },
  { tagId: 'tagId-5', label: 'Taxation', isSelected: false },
  { tagId: 'tagId-6', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-7', label: 'Sport', isSelected: false },
];

<div style={{ maxWidth: '320px', marginBottom: '50px' }}>
  <TagList tags={tags} hasHeader={true} />
</div>;
```

###### TagList without header :

```jsx
import { TagList, mockList } from './index';

const tags = [
  { tagId: 'tagId-1', label: 'Accessibilité', isSelected: true },
  { tagId: 'tagId-2', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-3', label: 'Sport', isSelected: false },
  { tagId: 'tagId-4', label: 'Mobilité', isSelected: true },
  { tagId: 'tagId-5', label: 'Taxation', isSelected: false },
  { tagId: 'tagId-6', label: 'Recherche', isSelected: false },
  { tagId: 'tagId-7', label: 'Sport', isSelected: false },
];

<div style={{ maxWidth: '320px', marginBottom: '50px' }}>
  <TagList tags={tags} hasHeader={false} />
</div>;
```
