// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { trackFilter } from 'Shared/services/Tracking';
import { SvgCheck } from 'Client/ui/Svg/elements';
import {
  SortedListStyle,
  SortedButtonStyle,
  SortedRadioStyle,
  CheckedStyle,
} from './style';
import { ScreenReaderItemStyle } from '../AccessibilityElements';

type Props = {
  /** The current sort element */
  currentSort: string,
  /** Array that will populate the sorted list */
  availableSorts: string[],
  /** Function to execute when we select one element */
  setSort: (arg: string) => void | Promise<void>,
  /** closePanel prop is sent by SelectPanel */
  closePanel?: () => void,
};

export const SortedList = ({
  currentSort,
  availableSorts,
  setSort,
  closePanel,
}: Props) => {
  const handleSorting = (value: string) => {
    trackFilter(value, 'checked');
    setSort(value);
    if (closePanel) {
      closePanel();
    }
  };

  return (
    <SortedListStyle>
      {availableSorts.map(availableSort => (
        <li key={availableSort}>
          <SortedButtonStyle
            onClick={() => handleSorting(availableSort)}
            className={availableSort === currentSort && 'selected'}
          >
            <SortedRadioStyle>
              {availableSort === currentSort && (
                <SvgCheck style={CheckedStyle} />
              )}
            </SortedRadioStyle>
            <ScreenReaderItemStyle>
              {i18n.t('consultation.sortby')}
            </ScreenReaderItemStyle>
            {i18n.t(`consultation.sort.${availableSort}`)}
          </SortedButtonStyle>
        </li>
      ))}
    </SortedListStyle>
  );
};
