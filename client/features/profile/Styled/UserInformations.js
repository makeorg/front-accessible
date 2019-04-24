import styled from 'styled-components';
import {
  FlexElementStyle,
  ColumnElementStyle,
  MiddleRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import {
  TextColors,
  MakeThemeColors,
  BasicColors,
} from 'Client/app/assets/vars/Colors';
import {
  GreyButtonStyle,
  UnstyledButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const UserAvatarLayoutStyle = styled(FlexElementStyle)`
  align-self: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: column;
    align-self: center;
  }
`;

export const UserAvatarStyle = styled.div`
  transform: translateY(-20px);
  margin-bottom: -20px;
  margin-right: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-right: 0;
  }
`;

export const UserContentWrapperStyle = styled(ColumnElementStyle)`
  align-content: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-content: center;
  }
`;

export const UserTitleStyle = styled(ThirdLevelTitleStyle)`
  margin: 5px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: center;
  }
`;

export const UserContentStyle = styled(ParagraphStyle)`
  margin-bottom: 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: center;
  }
  svg {
    fill: ${TextColors.MediumGrey};
  }
`;

export const UserDescriptionStyle = styled(ParagraphStyle)`
  padding: 0 5px;
  align-self: flex-start;
  max-height: ${props => (props.isCollapsed ? '35px' : '100%')};
  overflow: ${props => (props.isCollapsed ? 'hidden' : 'visible')};
`;

export const UserSeparatorStyle = styled(SeparatorStyle)`
  margin: 10px 0;
`;

export const UserInformationButtonStyle = styled(GreyButtonStyle)`
  margin: 10px 0 0;
`;

export const UserCollapseWrapperStyle = styled(MiddleRowStyle)`
  position: relative;
  z-index: 0;
  width: 100%;
  margin: 10px 0;
`;

export const UserCollapseSeparatorStyle = styled(SeparatorStyle)`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 0;
  &:before {
    display: ${props => (props.isCollapsed ? 'block' : 'none')};
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 50px;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgb(255, 255, 255)
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0) 3%, rgb(255, 255, 255));
  }
`;

export const UserCollapseButtonStyle = styled(UnstyledButtonStyle)`
  position: relative;
  z-index: 1;
  background-color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.RobotoCondensedBold};
  color: ${MakeThemeColors.Red};
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 10px;
`;
