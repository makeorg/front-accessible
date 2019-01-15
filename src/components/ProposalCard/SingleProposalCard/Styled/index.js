import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BasicColors, TextColors, ShadowColors } from 'Assets/vars/Colors';
import { Breakpoints, Layouts } from 'Assets/vars/Breakpoints';
import { MakeFonts } from 'Assets/vars/Fonts';
import { MiddleColumn, ColumnElement, MiddleColumnToRow } from 'Components/Elements/FlexElements';
import { Large, SeparatorStyle } from 'Components/Elements/Separators';
import { SmallRedButton } from 'Components/Elements/ButtonElements';
import { Proposal } from 'Components/ProposalCard/Styled/Proposal';

export const Card = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${Layouts.ContainerWidth};
  max-height: ${pxToRem('440px')};
  padding: ${pxToRem('15px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 13px 0 ${ShadowColors.BlackZeroThreOpacity};
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    max-height: ${pxToRem('550px')};
    padding: ${pxToRem('30px')};
  }
`;

export const Content = styled(Proposal)`
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('30px')};
    line-height: 1.29;
  }
`;

export const InnerProposal = styled(MiddleColumn)`
  width: 100%;
`;

export const ContentSeparator = styled(Large)`
  margin: ${pxToRem('10px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin: ${pxToRem('20px')} 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const FooterContent = styled(MiddleColumnToRow)`
  width: 100%;
`;

export const Description = styled(ColumnElement)`
  width: 100%;
  max-width: ${pxToRem('650px')};
  align-items: flex-start;
  color: ${TextColors.MediumGrey};
  > span {
    font-family: ${MakeFonts.RobotoBold};
    color: ${props => props.theme.color};
  }
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    align-items: flex-end;
  }
`;

export const FooterContentSeparator = styled(SeparatorStyle)`
  max-width: ${pxToRem('100px')};
  margin: ${pxToRem('5px')} 0 ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    max-width: ${pxToRem('2px')};
    height: ${pxToRem('60px')};
    margin: 0 ${pxToRem('25px')};
  }
`;

export const Button = styled(SmallRedButton)`
  text-decoration: none;
  margin: 0 ${pxToRem('5px')};
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
    text-decoration: none;
  }
`;
