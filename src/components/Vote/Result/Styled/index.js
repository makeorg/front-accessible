import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/styled';
import { SpaceBetweenColumn } from '../../../Elements/FlexElements';
import {
  Graph,
  TotalLabel
} from './Graph';

const VoteResult = styled(SpaceBetweenColumn)`
    width: 100%;
    max-width: ${pxToRem('62px')};
`;

/* Buttons */
VoteResult.Graph = Graph;
VoteResult.TotalLabel = TotalLabel;

export default VoteResult;
