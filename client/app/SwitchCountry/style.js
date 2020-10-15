import { color } from 'athena-design-tokens/dist/color';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { SvgCheck } from 'Client/ui/Svg/elements';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import styled from 'styled-components';
import { Breakpoints } from '../assets/vars/Breakpoints';
import { MakeFonts } from '../assets/vars/Fonts';

export const SwitchCountryTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const CountryListStyle = styled(UnstyledListStyle)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CountryLinkStyle = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;
  background-color: ${color.greyLighter};
  border-radius: 8px;
  border: 1px solid ${color.grey};
  min-width: 225px;
  &.selected {
    font-family: ${MakeFonts.CircularStandardBold};
  }
`;

export const SelectedCountryIconStyle = styled(SvgCheck)`
  width: 12px;
  .tofill {
    fill: ${color.black};
  }
`;
