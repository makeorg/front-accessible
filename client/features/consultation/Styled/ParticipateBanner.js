import styled from 'styled-components';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import {
  BasicColors,
  ShadowColors,
  MakeThemeColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const ParticipateWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${MakeThemeColors.Red};
  padding: 20px ${intToPx(DefaultPadding.Mobile)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin: 15px 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: ${intToPx(Elements.BorderRadius)};
    margin: 0 0 20px;
  }
`;

export const ParticipateIntroductionStyle = styled(ThirdLevelTitleStyle)`
  display: flex;
  color: ${BasicColors.PureWhite};
  flex-flow: column;
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  text-align: right;
  width: 100%;
  max-width: 450px;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 20px;
  }
`;

export const ParticipateDescriptionStyle = styled(ParagraphStyle)`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.LightGrey};
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ParticipateSeparatorStyle = styled.div`
  width: 1px;
  min-height: 75px;
  background-color: ${BasicColors.PureWhite};
  opacity: 0.3;
  margin: 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 20px;
  }
`;
