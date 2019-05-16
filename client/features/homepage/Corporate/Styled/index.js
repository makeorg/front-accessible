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

export const CorporateWrapperStyle = styled(CenterColumnStyle)`
  justify-content: center;
  width: 100%;
  background-color: ${MakeThemeColors.Red};
  padding: ${intToPx(DefaultPadding.Mobile)};
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
    margin: ${intToPx(DefaultPadding.Desktop)} 0;
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
  height: 2px;
  align-self: center;
  background-color: ${BasicColors.PureWhite};
  opacity: 0.6;
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 2px;
    height: 165px;
    margin: 0 ${intToPx(DefaultPadding.Mobile)};
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
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 34px;
  }
`;

export const CorporateIntroStyle = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  color: ${BasicColors.PureWhite};
  font-size: 14px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;
export const CorporateListItemStyle = styled.li`
  font-size: 14px;
  line-height: 1.5;
  color: ${BasicColors.PureWhite};
  margin: 10px 0;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const CorporateIconStyle = {
  marginRight: '10px',
  fill: BasicColors.PureWhite,
};

export const CorporateLinkStyle = styled(UnstyledButtonStyle)`
  ${BasicButtonStyle};
  display: inline-flex;
  text-decoration: none;
  background-color: ${BasicColors.PureWhite};
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
