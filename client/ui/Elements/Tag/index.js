import React from 'react';
import { SvgClose } from 'Client/ui/Svg/elements';
import { TagStyle, TagButtonStyle, TagIconStyle } from './Styled';

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
      <span
        dangerouslySetInnerHTML={{
          __html: name,
        }}
      />
      {isSelected && (
        <TagIconStyle>
          <SvgClose />
        </TagIconStyle>
      )}
    </TagStyle>
  );
};

Tag.defaultProps = {
  onClick: undefined,
  isSelected: false,
  isAButton: false,
};
