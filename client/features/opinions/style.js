import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';

export const DisclaimerSubtitleStyle = styled.h4`
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  color: ${color.black};
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  margin-bottom: 5px;
  &.margin-top {
    margin-top: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
  }
`;

export const OpinionCardListItemStyle = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OpinionCommentAuthorStyle = styled(FlexElementStyle)`
  align-items: center;
`;
