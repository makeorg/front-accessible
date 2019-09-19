import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { Elements } from 'Client/app/assets/vars/Elements';

export const ProposalWrapperStyle = styled.div`
  width: 100%;
  padding: ${intToPx(DefaultPadding.Mobile)};
  background-color: ${BasicColors.PureWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin: 0 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Tablet
    )}) {
    margin: 15px 0;
  }
`;

export const ProposalTitleStyle = styled(FourthLevelTitleStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  color: ${props => props.fontColor};
  margin: 5px 0 10px;
`;

export const LoadMoreWrapperStyle = styled(CenterColumnStyle)`
  margin-top: 15px;
`;
