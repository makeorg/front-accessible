import styled from 'styled-components';
import { color } from 'athena-design-tokens';

export const FormSuccessMessageStyle = styled.p`
  display: flex;
  align-content: center;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
`;

export const FormSuccessSvgStyle = {
  display: 'inline-flex',
  fontSize: '16px',
  marginRight: '5px',
  fill: color.success,
};
