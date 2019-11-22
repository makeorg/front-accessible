// @flow
import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  cloneElement,
} from 'react';
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
};

export const SelectPanel = ({ text, children, exposeClose }: Props) => {
  const rootRef = useRef();
  const [isOpened, setIsOpened] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

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

  const setHighlighted = (value: boolean) => {
    setIsHighlighted(value);
  };

  return (
    <SelectPanelWrapperStyled ref={rootRef}>
      <SelectButtonStyled onClick={togglePanel} isHighlighted={isHighlighted}>
        <TextWrapperStyle>
          <span>{text}</span>
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
                setHighlighted: value => setHighlighted(value),
              })
            : children}
        </PanelStyled>
      )}
    </SelectPanelWrapperStyled>
  );
};
