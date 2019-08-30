import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { Elements } from 'Client/app/assets/vars/Elements';

export const TileWithTitleStyle = styled.div`
  padding: 10px;
  background-color: ${BasicColors.PureWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TileSeparatorStyle = styled(SeparatorStyle)`
  margin: 8px 0 16px;
`;
