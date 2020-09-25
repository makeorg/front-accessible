import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Layouts, Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { Link } from 'react-router-dom';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ConsultationNavListStyle = styled.ul`
  display: flex;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: 30px auto 0;
  padding: 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 50px auto 0;
  }
`;

export const ConsultationNavItemStyle = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 15px;
  background-color: ${color.white};
  border-top: ${props =>
    props.isSelected
      ? `4px solid ${props.theme.color};`
      : `4px solid transparent`};
`;

export const ConsultationNavLinkStyle = styled(Link)`
  font-family: ${MakeFonts.CircularStandardBold};
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: ${color.black};
`;
