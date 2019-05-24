import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Layouts,
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const HomepageWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  flex-grow: 1;
  background-color: ${BasicColors.PureWhite};
  padding: 30px 0;
`;

export const HomepageContainerStyle = styled(CenterColumnStyle)`
  width: 100%;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0 ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const HomepageInnerContentStyle = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const HomepagePaddingContentStyle = styled(HomepageInnerContentStyle)`
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin: ${intToPx(DefaultPadding.Desktop)} 0;
  }
`;
