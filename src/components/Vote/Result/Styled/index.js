import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/styled';
import { SpaceBetweenColumn } from '../../../Elements/FlexElements';
import {
  Graph,
  Bar,
  Tooltip,
  TotalLabel
} from './Graph';

const VoteResults = styled(SpaceBetweenColumn)`
    width: 100%;
    max-width: ${pxToRem('62px')};
`;

/* Buttons */
VoteResults.Graph = Graph;
VoteResults.Bar = Bar;
VoteResults.Tooltip = Tooltip;
VoteResults.TotalLabel = TotalLabel;

export default VoteResults;
