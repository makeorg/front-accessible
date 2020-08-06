import styled from 'styled-components';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgLegalConsent } from 'Client/ui/Svg/elements';
import { SmallSeparatorStyle } from 'Client/ui/Elements/Separators';
import { FormCenterAlignStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { TextColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const AuthenticationWrapperStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 470px;
  &.hidden {
    visibility: hidden;
    display: none;
  }
`;

export const AuthenticationTitleStyle = styled(SecondLevelTitleStyle)`
  padding: 0 25px;
`;

export const LegalFormStyle = styled(FormCenterAlignStyle)`
  max-width: 475px;
  &.hidden {
    visibility: hidden;
    display: none;
  }
`;

export const LegalIconStyle = styled(SvgLegalConsent)`
  max-width: 100px;
  margin: 25px auto 30px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 150px;
    margin: 65px auto 40px;
  }
`;

export const LegalParagraphStyle = styled(ParagraphStyle)`
  margin-top: 15px;
  text-align: center;
`;

export const LegalSeparatorStyle = styled(SmallSeparatorStyle)`
  margin: 30px auto;
`;

export const LegalCheckboxWrapperStyle = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const LegalButtonGroupStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
`;

export const LegalCancelStyle = styled(UnstyledButtonStyle)`
  font-size: 16px;
  color: ${TextColors.AltMediumgrey};
  text-decoration: underline;
`;

export const LegalSubmitStyle = styled(RedButtonStyle)`
  &:disabled {
    color: ${TextColors.MediumGrey};
    background-color: ${BackgroundColors.ExtraLightGrey};
  }
`;
