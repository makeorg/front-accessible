import styled from 'styled-components';
import {
  FlexElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { GreyButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const UserAvatarLayoutStyle = styled(FlexElementStyle)`
  align-self: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: column;
    align-self: center;
  }
`;

export const UserAvatarStyle = styled.div`
  transform: translateY(-20px);
  margin: 0 15px -20px 0;
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
`;

export const UserSeparatorStyle = styled(SeparatorStyle)`
  margin: 10px 0;
`;

export const UserInformationButtonStyle = styled(GreyButtonStyle)`
  margin: 10px 0 0;
`;
