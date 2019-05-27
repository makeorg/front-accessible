import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
  Layouts,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { BasicButtonStyle } from 'Client/ui/Elements/ButtonElements/Styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const CorporateWrapperStyle = styled(CenterColumnStyle)`
  justify-content: center;
  width: 100%;
  background-color: ${MakeThemeColors.Red};
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 45px ${intToPx(DefaultPadding.Desktop)};
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

export const CorporateTitleStyle = styled.h2`
  font-size: 20px;
  color: ${BasicColors.PureWhite};
  font-weight: bold;
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 34px;
  }
`;

export const CorporateIntroStyle = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  color: ${BasicColors.PureWhite};
  font-size: 14px;
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Desktop
    )}) {
    font-size: 20px;
    margin-top: 15px;
  }
`;
export const CorporateListStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const CorporateListItemStyle = styled.li`
  display: flex;
  font-size: 14px;
  line-height: 1.5;
  font-weight: bold;
  color: ${BasicColors.PureWhite};
  margin: 7px 0;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Desktop
    )}) {
    font-size: 20px;
  }
`;

export const CorporateIconStyle = {
  marginRight: '10px',
  fill: BasicColors.PureWhite,
  marginTop: '3px',
};

export const CorporateLinkStyle = styled(UnstyledButtonStyle)`
  ${BasicButtonStyle};
  display: inline-flex;
  text-decoration: none;
  background-color: ${BasicColors.PureWhite};
  margin-top: 10px;
  @media (max-width: ${intToPx(Breakpoints.Desktop)}) {
    align-self: center;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Desktop
    )}) {
    margin: 15px 0;
  }
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
