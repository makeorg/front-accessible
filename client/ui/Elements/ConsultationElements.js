import styled from 'styled-components';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ConsultationLabelStyle = styled.p`
  background-color: ${BasicColors.PureBlack};
  padding: 5px;
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.RobotoCondensedBold};
  text-transform: uppercase;
`;
