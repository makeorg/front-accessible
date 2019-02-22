import styled, { keyframes } from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const PlaceholderWrapperStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
`;

const FadeInAnimation = keyframes`
  0% { opacity: 0.1; }
  75% { opacity: 0.4; }
  100% { opacity: 0.1; }
`;

export const PlaceholderStyle = styled.div`
  display: block;
  width: 100%;
  background-color: ${BasicColors.PureBlack};
  border-radius: ${pxToRem('20px')};
  opacity: 0.1;
  animation: ${FadeInAnimation} 1s infinite;
`;

export const PlaceholderTitleSTyle = styled(PlaceholderStyle)`
  max-width: ${pxToRem('800px')};
  height: ${pxToRem('15px')};
  margin: ${pxToRem('15px')} auto 0;
`;

export const PlaceholderSeparatorStyle = styled(PlaceholderStyle)`
  max-width: ${pxToRem('58px')};
  height: ${pxToRem('2px')};
  margin: ${pxToRem('20px')} auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('40px')} auto;
  }
`;

export const PlaceholderDescriptionStyle = styled(PlaceholderStyle)`
  max-width: ${pxToRem('330px')};
  height: ${pxToRem('8px')};
  margin: ${pxToRem('10px')} auto;
`;

export const PlaceholderButtonStyle = styled(PlaceholderStyle)`
  max-width: ${pxToRem('150px')};
  height: ${pxToRem('40px')};
  margin: ${pxToRem('10px')} auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('30px')} auto;
  }
`;
