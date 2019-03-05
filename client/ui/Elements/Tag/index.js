import React from 'react';
import {
  MakeThemeColors,
  BasicColors,
  BorderColors,
} from 'Client/app/assets/vars/Colors';
import { TagStyle } from './Styled';

type Props = {
  name: string,
  onClick?: () => void,
  selected?: boolean,
  disableHover?: boolean,
  color?: string,
  backgroundColor?: string,
  selectedColor?: string,
  selectedBackgroundColor?: string,
};

export const Tag = ({
  name,
  onClick,
  selected,
  disableHover,
  color,
  backgroundColor,
  selectedColor,
  selectedBackgroundColor,
}: Props) => {
  return (
    <TagStyle
      onClick={onClick}
      color={selected ? selectedColor : color}
      backgroundColor={selected ? selectedBackgroundColor : backgroundColor}
      hoverColor={disableHover ? color : selectedColor}
      hoverBackgroundColor={
        disableHover ? backgroundColor : selectedBackgroundColor
      }
    >
      {name}
    </TagStyle>
  );
};

Tag.defaultProps = {
  color: BasicColors.PureWhite,
  backgroundColor: BorderColors.LightGrey,
  selectedColor: BasicColors.PureWhite,
  selectedBackgroundColor: MakeThemeColors.Red,
  selected: false,
  disableHover: false,
  onClick: undefined,
};
