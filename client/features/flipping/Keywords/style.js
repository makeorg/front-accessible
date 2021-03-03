import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { typography } from 'athena-design-tokens/dist/typography';

export const KeywordItemStyle = styled(Link)`
  margin: 25px;
  letter-spacing: 0.14px;
  line-height: 1.5;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  text-decoration: none;
`;
