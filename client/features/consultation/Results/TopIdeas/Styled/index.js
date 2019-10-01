import styled from 'styled-components';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { BackgroundColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';

export const ThemeTitleStyle = styled(FourthLevelTitleStyle)`
  margin-top: 25px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const ThemeListItemStyle = styled.li`
  margin-top: 15px;
  padding: 20px;
  font-size: 12px;
  line-height: 18px;
  background-color: ${BackgroundColors.TaintedWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 22px;
  }
`;
