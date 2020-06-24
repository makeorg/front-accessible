import styled from 'styled-components';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import { Layouts } from 'Client/app/assets/vars/Breakpoints';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const BrowsePageWrapperStyle = styled(SpaceBetweenColumnStyle)`
  background-color: ${BasicColors.PureWhite};
  padding: 0 20px;
`;

export const BrowsePageInnerStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;
