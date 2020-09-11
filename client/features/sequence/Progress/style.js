import styled from 'styled-components';
import { SvgPreviousArrowLeft } from 'Client/ui/Svg/elements';
import {
  BasicColors,
  TextColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ProgressPreviousButtonStyle = styled(UnstyledButtonStyle)`
  flex: 0;
  padding: 5px 15px;
  background-color: ${BasicColors.PureWhite};
  border-radius: 17.5px;
`;

export const ProgressIconStyle = styled(SvgPreviousArrowLeft)`
  width: 13px;
`;

export const ProgressCounterStyle = styled.span`
  flex: 0;
  color: ${TextColors.BlackWithOpacity};
  font-size: 14px;
  padding: 0 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 25px;
  }
`;

export const ProgressBarWrapperStyle = styled.div`
  position: relative;
  flex: 1;
  border-radius: 12.5px;
  overflow: hidden;
  background-color: ${BasicColors.PureWhite};
  border: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const ProgressBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentWidth};
  background-color: ${props => props.theme.color};
  transition: width ease-in 0.5s;
`;
