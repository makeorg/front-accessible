// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

import { SortedListStyle, SortedListElementStyle, TextStyle } from './style';

type Props = {
  /** The current sort element */
  currentSort: string,
  /** Array that will populate the sorted list */
  availableSorts: string[],
  /** Function to execute when we select one element */
  setSort: (arg: string) => void,
  /** closePanel prop is sent by SelectPanel */
  closePanel?: () => void,
};

export const SortedList = ({
  currentSort,
  availableSorts,
  setSort,
  closePanel,
}: Props) => {
  const handleSorting = (event: SyntheticEvent<HTMLButtonElement>) => {
    setSort(event.currentTarget.value);
    if (closePanel) {
      closePanel();
    }
  };

  return (
    <SortedListStyle>
      {availableSorts.map(availableSort => (
        <SortedListElementStyle
          key={availableSort}
          htmlFor={`radio_sort_${availableSort}`}
        >
          <input
            type="radio"
            id={`radio_sort_${availableSort}`}
            checked={availableSort === currentSort}
            onChange={handleSorting}
            value={availableSort}
          />
          <TextStyle isSelected={availableSort === currentSort}>
            {i18n.t(`consultation.sort.${availableSort}`)}
          </TextStyle>
        </SortedListElementStyle>
      ))}
    </SortedListStyle>
  );
};
