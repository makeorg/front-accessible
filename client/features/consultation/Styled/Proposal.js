import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ProposalWrapperStyle = styled.section`
  padding: ${intToPx(DefaultPadding.Mobile)};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const ProposalTitleStyle = styled(FourthLevelTitleStyle)`
  font-family: ${MakeFonts.RobotoBold};
  text-transform: none;
  color: ${props => props.fontColor};
  margin: 5px 0 10px;
`;
