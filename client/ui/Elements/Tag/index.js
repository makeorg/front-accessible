import React from 'react';
import { TagStyle, TagButtonStyle } from './Styled';

type Props = {
  name: string,
  onClick?: () => void,
  isSelected?: boolean,
  isAButton?: boolean,
};

export const Tag = ({ name, onClick, isSelected, isAButton }: Props) => {
  return (
    <TagStyle
      onClick={onClick}
      className={isSelected ? 'selected' : ''}
      as={isAButton ? TagButtonStyle : TagStyle}
    >
      {name}
    </TagStyle>
  );
};

Tag.defaultProps = {
  onClick: undefined,
  isSelected: false,
  isAButton: false,
};
