import styled from 'styled-components';
import { BasicColors, TextColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const TagFilterWrapperStyle = styled.aside`
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const TagFilterIconStyle = styled.div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 7.5px;
  svg {
    width: 18px;
  }
`;

export const TagFilterIntroStyle = styled.span`
  margin-right: 15px;
  color: ${TextColors.MediumGrey};
  font-size: 14px;
`;

export const TagSeparatorStyle = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${BasicColors.PureBlack};
  opacity: 0.3;
  margin-top: 15px;
`;
