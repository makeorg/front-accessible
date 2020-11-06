import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const ResultsSliderStyle = styled.div`
  background-color: ${color.greyLighter};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const ResultsSliderArrowsStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  transform: translateY(-50%);
  z-index: 2;
  background-color: ${color.black};
  svg {
    fill: ${color.white};
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
