import styled from 'styled-components';

export const FlexElement = styled.div`
  display: flex;
`;

export const ColumnElement = styled(FlexElement)`
  flex-flow: column;
`;

/* Row Elements */
export const CenterRow = styled(FlexElement)`
  justify-content: center;
`;

export const MiddleRow = styled(CenterRow)`
  align-items: center;
`;

/* Column Elements */
export const CenterColumn = styled(ColumnElement)`
  align-items: center;
`;

export const MiddleColumn = styled(CenterColumn)`
  justify-content: center;
`;

export const SpaceBetweenColumn = styled(ColumnElement)`
  justify-content: space-between;
`;
