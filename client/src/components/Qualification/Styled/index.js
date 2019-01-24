import styled from 'styled-components';
import { SpaceBetweenColumn } from 'Src/components/Elements/FlexElements';
import { pxToRem } from 'Src/helpers/styled';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';

const Qualification = styled(SpaceBetweenColumn)`
  min-height: ${pxToRem('110px')};
  min-width: ${pxToRem('185px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('130px')};
  }
`;

export default Qualification;
