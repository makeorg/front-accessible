import styled from 'styled-components';
import { SpaceBetweenColumn } from 'Components/Elements/FlexElements';
import { pxToRem } from 'Helpers/styled';
import Breakpoints from 'Assets/vars/Breakpoints';

const Qualification = styled(SpaceBetweenColumn)`
  width: 100%;
  min-height: ${pxToRem('110px')};
  max-width: ${pxToRem('200px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    min-height: ${pxToRem('130px')};
  }
`;

export default Qualification;
