import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgTrending } from 'Client/ui/Svg/elements';

export const PopularTagsIconStyle = styled(SvgTrending)`
  margin-right: 10px;
`;

export const PopularTagsListStyle = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const PopularTagsListItemStyle = styled.li`
  display: flex;
  flex-flow: column;
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
  }
`;

export const FilterTriggerStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  color: ${color.brandSecondary};
  text-decoration: underline;
  text-align: left;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
  }
`;

export const ProposalCountStyle = styled.span`
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  color: ${color.greyDark};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  }
`;
