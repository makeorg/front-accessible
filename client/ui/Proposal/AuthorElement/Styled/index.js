import styled from 'styled-components';
import {
  TextColors,
  BasicColors,
  StatusColors,
  BackgroundColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';

export const AuthorWrapperStyle = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const AuthorDescriptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorInfosStyle = styled(ParagraphStyle)`
  display: ${props => (props.isSequence ? 'flex' : 'inline-flex')};
  flex-direction: ${props => (props.isSequence ? 'column' : 'row')};
  height: ${props => (props.isSequence ? '30%' : '')};
  align-items: center;
  font-size: ${props => (props.isSequence ? '14px' : '12px')};
  line-height: normal;
  color: ${props =>
    props.isSequence
      ? `${ShadowColors.BlackZeroFiveOpacity}`
      : `${TextColors.MediumGrey}`};
  font-style: normal;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;

export const InfosWrapperStyle = styled.span`
  display: 'inline-flex';
`;

export const ProposalStatusStyle = styled.span`
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  padding: 5px 10px;
  &.status-accepted {
    background-color: ${StatusColors.Accepted};
  }
  &.status-refused {
    background-color: ${StatusColors.Refused};
  }
  &.status-postponed,
  &.status-pending {
    background-color: ${BackgroundColors.ExtraLightGrey};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const CertifiedIconStyle = styled(SvgCheckedSymbol)`
  margin-left: 5px;
  .tofill {
    fill: ${TextColors.Blue};
  }
`;
