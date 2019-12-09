import styled from 'styled-components';
import { BasicColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

const DefaultTagStyle = `
  margin-right: 10px;
  margin-top: 10px;
  text-decoration: underline;
`;

const SelectedTagStyle = `
  background-color: ${MakeThemeColors.Red};
  color: ${BasicColors.PureWhite};
  &:before {
    border-color: transparent ${MakeThemeColors.Red} transparent transparent;
    color: ${BasicColors.PureWhite};
  }
  &:after {
    background-color: ${BasicColors.PureWhite};
  }
`;

export const TagStyle = styled(ParagraphStyle)`
  ${DefaultTagStyle};
`;

export const TagButtonStyle = styled.button`
  ${DefaultTagStyle};
  &.selected {
    ${SelectedTagStyle}
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    &:hover {
      ${SelectedTagStyle}
    }
  }
`;

export const TagIconStyle = styled.span`
  display: inline-flex;
  fill: ${BasicColors.PureWhite};
  font-size: 9px;
  margin-left: 5px;
`;
