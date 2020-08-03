import styled from 'styled-components';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { ContainerWithPadding } from 'Client/app/Styled/MainElements';

export const BrowsePageWrapperStyle = styled(SpaceBetweenColumnStyle)`
  background-color: ${BasicColors.PureWhite};
`;

export const BrowsePageInnerStyle = styled.div`
  ${ContainerWithPadding}
`;
