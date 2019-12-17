import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { CardStyle } from 'Client/ui/Cards';

export const ProposalInnerStyle = styled.div`
  margin-top: 10px;
`;

export const ProposalStyle = styled(Link)`
  width: 100%;
  font-size: 12px;
  line-height: 1.5;
  font-family: ${MakeFonts.CircularStandardBold};
  align-self: flex-start;
  flex: 1 1 auto;
  margin-top: 15px;
  text-decoration: none;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
  }
`;

export const ProposalCardStyle = styled(CardStyle)`
  margin: 15px 0 0;
  height: 100%;
`;
