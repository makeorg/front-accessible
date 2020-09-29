import { color } from 'athena-design-tokens';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { ContainerWithPadding } from 'Client/app/Styled/MainElements';
import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const PartnershipSectionStyle = styled(ColumnElementStyle)`
  width: 100%;
  background-color: ${color.brandPrimary};
`;

export const PartnershipInnerStyle = styled.div`
  ${ContainerWithPadding}
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const PartnershipSubtitleStyle = styled.span`
  font-size: 15px;
  text-transform: uppercase;
  color: ${color.white};
  opacity: 0.65;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  margin-bottom: 5px;
`;

export const PartnershipTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${color.white};
  margin-bottom: 15px;
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 42px;
    margin-bottom: 10px;
  }
`;

export const PartnershipParagraphStyle = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.12px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${color.white};
  margin-bottom: 30px;
`;
