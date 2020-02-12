import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { Elements } from 'Client/app/assets/vars/Elements';
import { FourthLevelTitleStyle } from '../../TitleElements';

export const TileWithTitleStyle = styled.div`
  background-color: ${props => props.backgroundColor || BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-bottom: 20px;
  padding: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: ${intToPx(Elements.BorderRadius)};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PresentationTileWithTitleStyle = styled(TileWithTitleStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: 0 0 ${intToPx(Elements.BorderRadius)}
      ${intToPx(Elements.BorderRadius)};
  }
`;

export const TileTitleStyle = styled(FourthLevelTitleStyle)`
  display: flex;
  align-items: center;
  .tofill {
    fill: ${BasicColors.PureBlack};
  }
`;

export const TileSeparatorStyle = styled(SeparatorStyle)`
  margin: 8px 0 16px;
`;

export const SidebarSeparatorStyle = styled(SeparatorStyle)`
  margin: 10px 0;
`;
