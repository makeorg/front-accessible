import styled from 'styled-components';
import { rem } from 'polished';
import { TextColors } from '../../assets/vars/Colors';

export const Description = styled.p`
  font-size: ${rem('16px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
`;

export const AltDescription = styled(Description)`
  font-size: ${rem('14px')};
`;

export const DescriptionLink = styled.a`
  cursor: pointer;
`;
