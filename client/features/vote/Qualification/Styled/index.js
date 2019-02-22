import styled from 'styled-components';
import { SpaceEvenlyColumnStyle } from 'Client/ui/Elements/FlexElements';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ContainerStyle = styled(SpaceEvenlyColumnStyle)`
  min-height: ${pxToRem('110px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-height: ${pxToRem('130px')};
  }
`;
