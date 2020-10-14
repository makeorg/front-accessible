import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { pxToRem, intToPx } from 'Shared/helpers/styled';
import TextareaAutosize from 'react-autosize-textarea';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  MiddleRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { ActiveButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SmallSeparatorStyle } from 'Client/ui/Elements/Separators';

export const DeprecatedProposalSubmitAuthenticationWrapperStyle = styled.div`
  max-width: 620px;
  min-height: 340px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px auto 0;
`;

export const ProposalSubmitSeparatorStyle = styled(SmallSeparatorStyle)`
  margin: 10px 0;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin: 20px 0;
  }
`;

export const DescriptionWrapperStyle = styled.div`
  margin: 20px auto 0;
  a,
  a:hover,
  a:focus {
    color: ${color.brandSecondary};
  }
`;

export const DeprecatedProposalSubmitFormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8px;
  border: 1px solid ${color.grey};
  border-radius: 26px;
  background-color: ${color.white};
  ${props =>
    props.isOpen
      ? `
    flex-flow: column;`
      : ''};
`;

export const ProposalInputWrapperStyle = styled(FlexElementStyle)`
  width: 100%;
`;

export const ProposalButtonWrapperStyle = styled(FlexElementStyle)`
  justify-content: flex-end;
  padding: 4px 0;
  ${props => (props.isOpen ? 'width: 100%;' : '')};
`;

export const ProposalLabelStyle = styled.label`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  line-height: 38px;
  margin-right: 2.5px;
  margin-left: 8px;
  white-space: nowrap;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.S.value)};
    line-height: 48px;
  }
`;

export const ProposalTextareaStyle = styled(TextareaAutosize)`
  width: 100%;
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  line-height: 18px;
  padding: 10px 5px;
  border: none;
  resize: none;
  margin-right: 15px;
  background-color: transparent;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.S.value)};
    line-height: 28px;
  }
`;

export const ProposalCharLimitStyle = styled(MiddleRowStyle)`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${color.greyDark};
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  line-height: 30px;
  padding: 0 2.5px;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
    line-height: 30px;
    padding: 0 10px;
  }
`;

export const ProposalButtonStyle = styled(ActiveButtonStyle)`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  padding: 6px 12px 2px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
    padding: 11px 12px 8px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
  }
`;

export const ProposalButtonLabelStyle = styled.span`
  display: inline;
  visibility: visible;
`;
