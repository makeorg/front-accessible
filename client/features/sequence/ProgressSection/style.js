import styled from 'styled-components';
import { SvgPreviousArrowLeft } from 'Client/ui/Svg/elements';
import { BackgroundColors, BasicColors } from 'Client/app/assets/vars/Colors';

export const PreviousButtonWrapperStyle = styled.button`
  display: flex;
  padding: 3px 15px;
  background-color: ${BasicColors.PureWhite};
  border-radius: 17.5px;
  border: none;
  width: 44px;
  height: 20px;
`;

export const PreviousButton = styled(SvgPreviousArrowLeft)`
  align-content: center;
  width: 13px;
  padding-top: none;
  .tofill {
    fill: ${BackgroundColors.ExtraLightGrey};
  }
`;
