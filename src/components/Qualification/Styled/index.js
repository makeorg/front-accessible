import styled from 'styled-components';
import { SpaceBetweenColumn } from 'Components/Elements/FlexElements';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints } from 'Assets/vars/Breakpoints';

const Qualification = styled(SpaceBetweenColumn)`
  min-height: ${pxToRem('110px')};
  min-width: ${pxToRem('185px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('130px')};
  }
`;

export default Qualification;
