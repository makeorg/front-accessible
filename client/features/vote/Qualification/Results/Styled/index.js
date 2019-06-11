import styled from 'styled-components';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const QualificationDataItemStyle = styled(UnstyledListStyle)`
  margin-top: 10px;
`;

export const QualificationLabelStyle = styled.span`
  font-size: 12px;
  line-height: 22px;
  font-family: ${MakeFonts.RobotoBold};
  color: ${props => props.color};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const QualificationContStyle = styled.span`
  font-size: 12px;
  line-height: 22px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;
