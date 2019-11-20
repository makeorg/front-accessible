import styled from 'styled-components';
import {
  BasicColors,
  BackgroundColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { intToPx } from 'Shared/helpers/styled';

export const SortedListStyle = styled.div`
  background-color: ${BackgroundColors.ExtraLightGrey};
  padding: 14px;
  overflow: auto;
  width: 100%;
  max-height: ${intToPx(Elements.DropdownsContainerHeight)};
`;

export const SortedListElementStyle = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 7px;
  color: ${BasicColors.PureBlack};
  background-color: ${BasicColors.PureWhite};
  border-radius: 3px;
  padding: 7px 15px;
  font-weight: normal;
`;

export const TextStyle = styled.span`
  padding-left: 15px;
  color: ${TextColors.MediumGrey};
`;
