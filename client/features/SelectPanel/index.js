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
  SelectPanelWrapperStyled,
  SelectButtonStyled,
  PanelStyled,
  ArrowStyle,
  TextWrapperStyle,
} from './style';

type Props = {
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
    <SelectPanelWrapperStyled ref={rootRef}>
      <SelectButtonStyled onClick={togglePanel} isHighlighted={shouldHighlight}>
        <TextWrapperStyle>
          <span>
            {selectedElements && selectedElements > 0
              ? i18n.t('consultation.tags.count', { count: selectedElements })
              : text}
          </span>
          {isOpened ? (
            <ArrowStyle>
              <SvgAngleArrowTop />
            </ArrowStyle>
          ) : (
            <ArrowStyle>
              <SvgAngleArrowBottom />
            </ArrowStyle>
          )}
        </TextWrapperStyle>
      </SelectButtonStyled>
      {isOpened && (
        <PanelStyled onClick={e => e.nativeEvent.stopPropagation()}>
          {exposeClose
            ? cloneElement(children, {
                closePanel: () => setIsOpened(false),
              })
            : children}
        </PanelStyled>
      )}
    </SelectPanelWrapperStyled>
  );
};
