import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
  Layouts,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { PlayfairParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const CorporateWrapperStyle = styled(CenterColumnStyle)`
  justify-content: center;
  width: 100%;
  background-color: ${MakeThemeColors.Red};
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 45px 20px;
  }
`;

export const CorporateContainerStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
  }
`;

export const CorporateSeparatorStyle = styled.div`
  width: 100%;
  height: 1px;
  align-self: center;
  background-color: ${BasicColors.PureWhite};
  opacity: 0.6;
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 1px;
    height: 190px;
    margin: 0 25px;
  }
`;

export const CorporateSectionStyle = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  flex: 1;
`;

export const CorporateTitleStyle = styled(SecondLevelTitleStyle)`
  color: ${BasicColors.PureWhite};
  margin-bottom: 10px;
`;

export const CorporateIntroStyle = styled(PlayfairParagraphStyle)`
  color: ${BasicColors.PureWhite};
  margin-bottom: 10px;
`;

export const CorporateListStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const CorporateListItemStyle = styled.li`
  display: flex;
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 14px;
  line-height: 21px;
  color: ${BasicColors.PureWhite};
  margin: 7px 0;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CorporateIconStyle = {
  width: '14px',
  height: '14px',
  marginRight: '10px',
  fill: BasicColors.PureWhite,
  marginTop: '3px',
};

export const CorporateLinkStyle = styled(BasicButtonStyle)`
  display: inline-flex;
  text-decoration: none;
  background-color: ${BasicColors.PureWhite};
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 15px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 25px;
  }
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
