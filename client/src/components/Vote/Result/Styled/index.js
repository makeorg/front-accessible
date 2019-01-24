import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { CenterColumn } from 'Src/components/Elements/FlexElements';
import {
  Graph,
  TotalLabel
} from './Graph';

const VoteResult = styled(CenterColumn)`
    margin-right: ${pxToRem('10px')};
`;

/* Buttons */
VoteResult.Graph = Graph;
VoteResult.TotalLabel = TotalLabel;

export default VoteResult;
