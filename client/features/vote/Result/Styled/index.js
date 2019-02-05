import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  Graph,
  TotalLabel
} from './Graph';

const VoteResult = styled(CenterColumnStyle)`
    margin-right: ${pxToRem('10px')};
`;

/* Buttons */
VoteResult.Graph = Graph;
VoteResult.TotalLabel = TotalLabel;

export default VoteResult;
