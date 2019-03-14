import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';

export const ProposalStyle = styled.blockquote`
  max-width: 100%;
  font-size: 12px;
  line-height: normal;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  align-self: flex-start;
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 18px;
  }
`;

export const FooterStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-self: flex-start;
  flex-wrap: wrap;
`;

export const ProposalSeparatorStyle = styled(SeparatorStyle)`
  margin-top: 10px;
`;

export const ProposalCardTaggedStyle = styled.div`
  margin: 20px 0;
`;
