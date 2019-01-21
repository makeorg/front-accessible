import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { CenterColumn } from 'Components/Elements/FlexElements';
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
