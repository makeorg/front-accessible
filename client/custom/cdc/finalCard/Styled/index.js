import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  ThirdLevelTitleStyle,
  SecondLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { IntroButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const FinalQuestionTitleStyle = styled(SecondLevelTitleStyle)`
  margin-bottom: 10px;
`;

export const MoreQuestionWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const MoreQuestionSeparatorStyle = styled(SeparatorStyle)`
  max-width: 500px;
  margin: 20px auto 30px;
`;

export const MoreQuestionImageStyle = styled.img`
  max-width: 200px;
  margin-bottom: 15px;
`;

export const MoreQuestionParagraphStyle = styled(ParagraphStyle)`
  text-align: center;
`;

export const MoreQuestionTitleStyle = styled(ThirdLevelTitleStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  text-align: center;
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
