import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

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
    flex-flow: row;
    justify-content: space-between;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const BusinessConsultationsItemStyle = styled.li`
  display: flex;
  border-radius: 8px;
  background-color: rgb(242, 242, 242);
  overflow: hidden;
  margin: 0 0 ${intToPx(DefaultPadding.Mobile)};
  &:last-child {
    margin: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 30px 0 0;
    &:last-child {
      margin: 0;
    }
  }
`;

export const BusinessConsultationsItemLinkStyle = styled(Link)`
  display: flex;
  text-decoration: none;
  font-family: ${MakeFonts.RobotoBold};
  font-size: 13px;
  line-height: 1.4;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const BusinessConsultationStyle = styled.div`
  padding: 15px;
`;

export const BusinessConsultationsItemStatusStyle = styled.p`
  font-family: ${MakeFonts.RobotoCondensedBold};
  color: ${TextColors.MediumGrey};
  text-transform: uppercase;
  margin-bottom: 5px;
  line-height: 1;
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
