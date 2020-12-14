import styled from 'styled-components';

export const DeprecatedConsultationHeaderWrapperStyle = styled.div`
  background-color: ${props => props.backgroundcolor};
  background: linear-gradient(
    115deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
`;
