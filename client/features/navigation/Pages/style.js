import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const PagesItemStyle = styled.li`
  display: inline-flex;
  margin-right: 45px;
  &:last-child {
    margin-right: 0;
  }
`;

export const PagesLinkStyle = styled(Link)`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  text-decoration: none;
  padding-bottom: 14px;
  color: ${color.greyDark};
  border-bottom: 2px solid transparent;
  &:hover,
  &:focus {
    color: ${color.black};
  }
  &.selected,
  &.selected:hover,
  &.selected:focus {
    color: ${color.brandSecondary};
    border-bottom: 2px solid ${color.brandSecondary};
  }
`;
