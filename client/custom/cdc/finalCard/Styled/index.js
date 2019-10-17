import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { IntroButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const MoreQuestionWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 30px auto 0;
`;

export const MoreQuestionTitleStyle = styled(ThirdLevelTitleStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  text-align: center;
  max-width: 400px;
  margin: 0 auto 15px;
`;

export const MoreQuestionButtonStyle = styled(IntroButtonStyle)`
  text-decoration: none;
  margin: 0 auto;
  &:hover {
    text-decoration: none;
    color: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 auto;
  }
`;
