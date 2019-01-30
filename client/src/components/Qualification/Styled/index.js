import styled from 'styled-components';
import { SpaceBetweenColumn } from 'Client/ui/Elements/FlexElements';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

const Qualification = styled(SpaceBetweenColumn)`
  min-height: ${pxToRem('110px')};
  min-width: ${pxToRem('185px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('130px')};
  }
`;

export default Qualification;
