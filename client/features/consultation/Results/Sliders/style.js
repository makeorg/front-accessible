import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ResultsSliderStyle = styled.div`
  background-color: ${color.greyLighter};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  &.results-page {
    box-shadow: none;
    margin-top: 10px;
    @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
      margin-top: ${props => (props.isResultsPage ? '0px' : '15px')};
    }
  }
`;

export const ResultsSliderArrowsStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${props => (props.isResultsPage ? '40%' : '50%')};
  right: ${props => (props.isResultsPage ? '20px' : '0px')};
  display: flex;
  align-content: center;
  justify-content: center;
  width: ${props => (props.isResultsPage ? '40px' : '30px')};
  height: ${props => (props.isResultsPage ? '40px' : '30px')};
  border-radius: 50%;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  transform: translateY(-50%);
  z-index: 2;
  background-color: ${props =>
    props.isResultsPage ? 'transparent' : `${color.black}`};
  svg {
    fill: ${props =>
      props.isResultsPage ? `${color.black}` : `${color.white}`};
  }
  &.glider-prev {
    left: 0;
    transform: translateX(-50%);
  }
  &.glider-next {
    right: 0;
    transform: translateX(50%);
  }
`;

export const ResultsCounterStyle = styled(ParagraphStyle)`
  text-align: center;
  margin-top: 20px;
  font-family: ${MakeFonts.CircularStandardBold};
`;

export const ResultsSliderPagination = styled(ParagraphStyle)`
  text-align: center;
  margin-top: 10px;
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  line-height: 1.5;
  letter-spacing: 0.12px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 20px;
    }
  }
`;
