import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';

export const TagSectionTitle = styled(FourthLevelTitleStyle)`
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
  }
`;

export const TagIconStyle = styled(SvgThumbsUp)`
  width: 18px;
  height: 18px;
  display: inline-flex;
  margin-right: 7.5px;
  .tofill {
    fill: ${color.black};
  }
`;

export const FiltersContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;
  padding: 10px 0;

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ResetStyle = styled.span`
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
  margin-left: 10px;
`;

export const SeparatorStyle = styled.div`
  padding: 0;
  color: ${color.greyLighter};

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 15px;
  }
`;

export const TextStyle = styled.div`
  display: flex;
  font-size: 12px;
  padding: 0 10px 10px 20px;

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 10px 0 0;
  }
`;

export const SelectContainerStyle = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`;
