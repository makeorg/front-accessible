import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { CardStyle } from 'Client/ui/Cards';

export const ProposalStyle = styled.a`
  width: 100%;
  font-size: 12px;
  height: 18px;
  line-height: normal;
  font-family: ${MakeFonts.CircularStandardBold};
  align-self: flex-start;
  flex: 1;
  margin-top: 15px;
  text-decoration: none;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16px;
    height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
    height: 26px;
  }
`;

export const ProposalCardStyle = styled(CardStyle)`
  margin: 15px 0 0;
  &:only-child {
    margin: 0;
  }
`;
