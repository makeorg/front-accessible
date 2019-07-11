import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Layouts, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const HomepageWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  background-color: ${BasicColors.PureWhite};
  padding: 30px 0;
`;

export const HomepageInnerContentStyle = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const HomepagePaddingContentStyle = styled(HomepageInnerContentStyle)`
  margin-top: ${intToPx(DefaultPadding.Desktop)};
`;
