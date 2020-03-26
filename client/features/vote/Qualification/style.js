import styled from 'styled-components';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { TextColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const QualificationDataItemStyle = styled(UnstyledListStyle)`
  margin-top: 10px;
`;

export const QualificationLabelStyle = styled.span`
  font-size: 12px;
  line-height: 22px;
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${props => props.color};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const QualificationContentStyle = styled.span`
  font-size: 12px;
  line-height: 22px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const QualifyButtonStyle = styled.button`
  font-family: ${MakeFonts.CircularStandardBold};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-width: 2px;
  font-size: 11.2px;
  line-height: 20px;
  border-style: solid;
  padding: 0 10px;
  border-radius: 36px;
  border-color: ${props => props.color};
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  &.qualified {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 12.6px;
    line-height: 23px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 14px;
    line-height: 26px;
  }
`;

export const CounterStyle = styled.span`
  font-size: 14.4px;
  margin-left: 10px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16.2px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
  }
`;
