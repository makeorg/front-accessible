import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { CardStyle } from 'Client/ui/Cards';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ColumnElementStyle } from './FlexElements';

export const ProposalInnerStyle = styled(ColumnElementStyle)`
  height: 100%;
  justify-content: space-between;
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
  justify-self: flex-start;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
  }
`;

export const ProposalCardStyle = styled(CardStyle)`
  margin: 20px 0 0;
  &.mobile-radius {
    border-radius: ${intToPx(Elements.BorderRadius)};
  }
  &:first-child {
    margin: 0;
  }
  &:only-child {
    margin: 0;
  }
  height: 100%;
`;
