import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { TabsOffsetMobile, TabsOffsetDesktop } from 'Shared/constants/tabs';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';

const MobilePaddingWithOffset = DefaultPadding.Mobile + TabsOffsetMobile;
const DesktopPaddingWithOffset = DefaultPadding.Desktop + TabsOffsetDesktop;

export const IntroWrapperStyle = styled(MiddleColumnStyle)`
  background-color: ${props => props.backgroundcolor};
  background: linear-gradient(
    115deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  padding: ${intToPx(DefaultPadding.Mobile)} ${intToPx(DefaultPadding.Mobile)}
    ${intToPx(MobilePaddingWithOffset)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)}
      ${intToPx(DefaultPadding.Desktop)} ${intToPx(DesktopPaddingWithOffset)};
  }
`;

export const IntroLabelStyle = styled(ConsultationLabelStyle)`
  margin-bottom: 5px;
`;

export const IntroBannerTitleStyle = styled(SecondLevelTitleStyle)`
  max-width: 550px;
  color: ${BasicColors.PureWhite};
  line-height: 30px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    line-height: 46px;
  }
`;
