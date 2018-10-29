import styled from 'styled-components';
import { SpaceBetweenColumn } from '../../Elements/FlexElements';
import { pxToRem } from '../../../helpers/styled';

const Qualification = styled(SpaceBetweenColumn)`
  width: 100%;
  min-height: ${pxToRem('130px')};
  max-width: ${pxToRem('200px')};
`;

export default Qualification;
