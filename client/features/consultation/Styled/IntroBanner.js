import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
  Layouts,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { TabsOffsetMobile, TabsOffsetDesktop } from 'Shared/constants/tabs';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

const MobilePaddingWithOffset = DefaultPadding.Mobile + TabsOffsetMobile;
const DesktopPaddingWithOffset = DefaultPadding.Desktop + TabsOffsetDesktop;

export const IntroWrapperStyle = styled(MiddleColumnStyle)`
  background-color: ${props => props.backgroundcolor};
  background: linear-gradient(
    115deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  padding: 30px ${intToPx(DefaultPadding.Mobile)};
  &.great-cause-banner {
    padding-bottom: ${intToPx(MobilePaddingWithOffset)};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 50px ${intToPx(DefaultPadding.Desktop)};
    &.great-cause-banner {
      padding-bottom: ${intToPx(DesktopPaddingWithOffset)};
    }
  }
`;

export const GreatCauseIntroWrapperStyle = styled(IntroWrapperStyle)`
  position: relative;
  padding-bottom: ${intToPx(MobilePaddingWithOffset)};
  color: ${props => props.theme.fontColor};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding-bottom: ${intToPx(DesktopPaddingWithOffset)};
  }
`;

export const GreatCauseIntroLabelStyle = styled(ConsultationLabelStyle)`
  margin-bottom: 5px;
`;

export const GreatCauseIntroBannerTitleStyle = styled(SecondLevelTitleStyle)`
  text-align: center;
  max-width: 550px;
  color: ${props => props.theme.fontColor};
  line-height: 1.33;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 1.53;
  }
`;

export const DefaultBannerMainContainer = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  line-height: 1.33;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 1.53;
  }
`;

export const DefaultBannerTitleStyle = styled(SecondLevelTitleStyle)`
  color: ${props => props.theme.fontColor};
  line-height: 1.33;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 1.53;
  }
`;

export const DefaultBannerTimeStyle = styled.div`
  color: ${props => props.theme.fontColor};
  opacity: 0.65;
  line-height: 24px;
  margin-top: 10px;
  font-size: 0.9em;
`;
