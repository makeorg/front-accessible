import styled from 'styled-components';
import {
  FlexElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { TextColors } from 'Client/app/assets/vars/Colors';

export const UserWrapperStyle = styled(ColumnElementStyle)`
  padding: 0 ${intToPx(DefaultPadding.Mobile)} ${intToPx(DefaultPadding.Mobile)};
`;

export const UserAvatarLayoutStyle = styled(FlexElementStyle)`
  align-self: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: column;
    align-self: center;
  }
`;

export const UserAvatarStyle = styled.div`
  transform: translateY(-20px);
  margin: 0 15px -20px 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin: 0 auto;
  }
`;

export const UserContentWrapperStyle = styled(ColumnElementStyle)`
  align-content: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    align-content: center;
  }
`;

export const UserTitleStyle = styled(ThirdLevelTitleStyle)`
  margin: ${intToPx(DefaultPadding.Mobile)} 0 5px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    text-align: center;
    margin: 0 0 5px;
  }
`;

export const UserContentStyle = styled(ParagraphStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    text-align: center;
  }
  svg {
    fill: ${TextColors.MediumGrey};
  }
`;

export const UserSeparatorStyle = styled(SeparatorStyle)`
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
`;
