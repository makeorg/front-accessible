import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Layouts,
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const HomepageWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  background-color: ${BasicColors.PureWhite};
  padding: 30px 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 35px 0;
  }
`;

export const HomepageInnerContentStyle = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: ${intToPx(Layouts.SpecialContainerWidth)};
    padding: 0 20px;
  }
`;

export const HomepagePaddingContentStyle = styled(HomepageInnerContentStyle)`
  margin-top: ${intToPx(DefaultPadding.Desktop)};
`;

export const HomeTitleStyle = styled(SecondLevelTitleStyle)`
  width: 100%;
  margin-bottom: 8px;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 12px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    margin-bottom: 16px;
  }
`;
