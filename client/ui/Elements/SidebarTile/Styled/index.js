import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { IntToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';

export const SidebarTileStyle = styled.div`
  padding: 10px;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-top: 20px;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    padding: 20px;
  }
  &.no-margin-top {
    margin-top: 0;
  }
`;

export const SidebarSeparatorStyle = styled(SeparatorStyle)`
  margin: 8px 0 16px;
`;
