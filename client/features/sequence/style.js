import styled from 'styled-components';
import { GreyLinkStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';

export const SequenceContainerStyle = styled(MiddleColumnStyle)`
  position: relative;
  width: 100%;
  display: flex;
  flex: 1;
  max-width: ${intToPx(Layouts.ContainerWithPadding)};
  margin: 0 auto;
  padding: 0 20px;
`;

export const SequenceContentStyle = styled(MiddleColumnStyle)`
  width: 100%;
  flex: 1;
`;

export const ConsultationPageLinkStyle = styled(GreyLinkStyle)`
  align-self: flex-start;
  margin: 20px 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    position: absolute;
    line-height: 37px;
    left: 20px;
    bottom: 40px;
    margin: 0;
    &.static {
      position: static;
      margin: 40px 0;
    }
  }
`;
