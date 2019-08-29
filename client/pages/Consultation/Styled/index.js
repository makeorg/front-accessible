import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { TabsOffsetMobile, TabsOffsetDesktop } from 'Shared/constants/tabs';
import { BasicColors } from 'Client/app/assets/vars/Colors';

const MobileOffset = intToPx(TabsOffsetMobile);
const DesktopOffset = intToPx(TabsOffsetDesktop);
const MobileMarginWithOffset = DefaultPadding.Mobile - TabsOffsetMobile;
const DesktopMarginWithOffset = DefaultPadding.Desktop - TabsOffsetDesktop;

export const ConsultationPageWrapperStyle = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 0 auto ${intToPx(MobileMarginWithOffset)};
  transform: translateY(-${MobileOffset});
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 auto ${intToPx(DesktopMarginWithOffset)};
    transform: translateY(-${DesktopOffset});
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 10px 0 20px;
    max-width: 750px;
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 20px 0 10px;
    order: 1;
    max-width: 360px;
    position: sticky;
    ${props =>
      props.bottomAffix
        ? `bottom: -${DesktopOffset}; align-self: flex-end`
        : `top: ${DesktopOffset} ; align-self: flex-start`};
  }
`;

export const ConsultationIconStyle = styled.span`
  display: inline-flex;
  margin-right: 7.5px;
  path.tofill {
    fill: ${BasicColors.PureBlack};
  }
`;
