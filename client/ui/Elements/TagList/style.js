import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { Elements } from 'Client/app/assets/vars/Elements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { SvgClose } from 'Client/ui/Svg/elements';
import { UnstyledButtonStyle } from '../Buttons/style';

export const TaglistWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${color.greyLighter};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 100%;
  }
`;

export const TagListStyle = styled.ul`
  order: 2;
  list-style-type: none;
  padding: 15px;
  width: 100%;
  overflow: auto;
  max-height: ${intToPx(Elements.DropdownsContainerHeight)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: ${intToPx(Elements.DropdownsContainerWidth)};
  }
`;

export const TagButtonElementStyle = styled(UnstyledButtonStyle)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  border-radius: 3px;
  padding: 7px 15px;
  color: ${props => (props.isSelected ? color.white : color.black)};
  background-color: ${props =>
    props.isSelected ? color.brandSecondary : color.white};
`;

export const TagLabelStyle = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TagIconStyle = styled(SvgClose)`
  width: 10px;
  .tofill {
    fill: ${color.white};
  }
`;

export const ProposalCountStyle = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: ${props => (props.isSelected ? color.white : color.greyDark)};
`;

export const TagListHeaderStyle = styled.div`
  display: flex;
  order: 1;
  justify-content: space-between;
  background-color: ${color.greyDark};
  color: ${color.white};
  padding: 11px 15px 8px 15px;
  font-size: 12px;
`;

export const TagElementUnderlinedStyle = styled(UnstyledButtonStyle)`
  color: ${color.white};
  text-decoration: underline;
`;

export const TagListFooterStyle = styled.div`
  padding: 33px 10%;
  background-color: ${color.white};
  color: ${color.black};
  text-align: center;
  width: 100%;
  order: 3;
`;

export const CenterButtonStyle = styled.div`
  margin: 0 auto;
  display: inline-block;
`;
