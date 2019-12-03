import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const TagsTooltipWrapperStyle = styled.div`
  position: relative;
  font-family: ${MakeFonts.CircularStandardBook};
  background-color: ${BackgroundColors.Notifications};
  color: ${BasicColors.PureWhite};
  padding: 15px 20px;
  border-radius: ${intToPx(Elements.BorderRadius)};
  margin: 0 0 20px 0;
`;

export const TagsTooltipCrossStyle = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;

  svg {
    fill: ${BasicColors.PureWhite};
    width: 10px;
  }
`;

export const TriangleStyle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent ${BackgroundColors.Notifications}
    transparent;
  margin-left: 73%;

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 440px;
  }
`;

export const LinkStyle = styled(Link)`
  color: ${BasicColors.PureWhite};
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;