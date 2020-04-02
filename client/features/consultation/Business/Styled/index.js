import styled from 'styled-components';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { NavButtonStyle } from 'Client/ui/Elements/Buttons/style';

export const BusinessConsultationsTitleStyle = styled.h2`
  font-size: 20px;
  line-height: 1;
  margin-bottom: 25px;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 24px;
    padding: 0;
  }
`;

export const BusinessConsultationsStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-flow: column;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 30px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const BusinessConsultationsItemStyle = styled.li`
  display: flex;
  border-radius: ${intToPx(Elements.BorderRadius)};
  background-color: ${props => props.backgroundColor || 'rgb(242, 242, 242)'};
  overflow: hidden;
  margin: 0 0 ${intToPx(DefaultPadding.Mobile)};
`;

export const BusinessConsultationsItemLinkStyle = styled(ParagraphStyle)`
  display: flex;
  text-decoration: none;
  font-family: ${MakeFonts.CircularStandardBold};
  width: 100%;
`;

export const BusinessConsultationStyle = styled.div`
  padding: 15px;
  flex: 1;
`;

export const BusinessConsultationsItemStatusStyle = styled.p`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${TextColors.MediumGrey};
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 4px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const BusinessConsultationsItemBorderStyle = styled.div`
  width: 10px;
  background: linear-gradient(
    352deg,
    ${props => props.colorStart},
    ${props => props.colorEnd}
  );
`;

export const BusinessConsultationsItemArrowStyle = {
  justifySelf: 'center',
  alignSelf: 'center',
  marginRight: '5px',
};

export const BusinessConsultationsMoreStyle = styled(NavButtonStyle)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const BusinessConsultationsMoreArrowStyle = {
  display: 'flex',
  fill: MakeThemeColors.Red,
};
