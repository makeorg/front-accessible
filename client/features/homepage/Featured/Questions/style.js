import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';

export const FeaturedListItemStyle = styled.li`
  display: inline-flex;
  margin: 0 15px 15px 0;
`;

export const FeaturedLinkStyle = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${color.black};
  text-decoration: none;
  background-color: transparent;
  border: 1px solid ${color.black};
  padding: 10px 15px;
  border-radius: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const FeaturedLinkIconStyle = styled(SvgAngleArrowRight)`
  width: 12px;
  height: 12px;
  margin-left: 15px;
  .tofill {
    fill: ${color.brandSecondary};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 14px;
    height: 14px;
  }
`;
