// @flow
import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  cloneElement,
} from 'react';
import { i18n } from 'Shared/i18n';
import { SvgAngleArrowBottom, SvgAngleArrowTop } from 'Client/ui/Svg/elements';
import {
  SelectPanelWrapperStyle,
  SelectButtonStyle,
  PanelStyle,
  ArrowStyle,
} from './style';
import { ScreenReaderItemStyle } from '../AccessibilityElements';

type Props = {
  /** id of the panel */
  id: string,
  /** text displayed in the select */
  text: string,
  /** children that is wrapped by the SelectPanel */
  children: any,
  /** close the panel, closePanel prop is sent by SelectPanel */
  exposeClose?: boolean,
  /** select should be hightlighted or not */
  shouldHighlight?: boolean,
  /** count of selected elements */
  selectedElements?: number,
};

export const SelectPanel = ({
  id,
  text,
  children,
  exposeClose,
  shouldHighlight,
  selectedElements = 0,
}: Props) => {
  const rootRef = useRef();
  const [isOpened, setIsOpened] = useState(false);

  const handleClickOutside = useMemo(
    () => (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePanel = event => {
    event.nativeEvent.stopPropagation();
    setIsOpened(!isOpened);
  };

  return (
    <SelectPanelWrapperStyle id={id} ref={rootRef}>
      <SelectButtonStyle
        onClick={togglePanel}
        isHighlighted={shouldHighlight}
        aria-expanded={isOpened}
        aria-live="polite"
        id={`panel_trigger_${id}`}
      >
        {selectedElements && selectedElements > 0 ? (
          <>
            <ScreenReaderItemStyle>
              {i18n.t('consultation.tags.selected_state')}
            </ScreenReaderItemStyle>
            {i18n.t('consultation.tags.count', { count: selectedElements })}
          </>
        ) : (
          text
        )}
        {isOpened ? (
          <>
            <ScreenReaderItemStyle>
              {i18n.t('consultation.tags.collapse')}
            </ScreenReaderItemStyle>
            <ArrowStyle>
              <SvgAngleArrowTop />
            </ArrowStyle>
          </>
        ) : (
          <>
            <ScreenReaderItemStyle>
              {i18n.t('consultation.tags.expand')}
            </ScreenReaderItemStyle>
            <ArrowStyle>
              <SvgAngleArrowBottom />
            </ArrowStyle>
          </>
        )}
      </SelectButtonStyle>
      <PanelStyle
        className={isOpened && 'open'}
        aria-hidden={!isOpened}
        onClick={e => e.nativeEvent.stopPropagation()}
      >
        {exposeClose
          ? cloneElement(children, {
              closePanel: () => setIsOpened(false),
            })
          : children}
      </PanelStyle>
    </SelectPanelWrapperStyle>
  );
};
