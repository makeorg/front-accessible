import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ContainerStyle = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: ${pxToRem('275px')};
  margin: ${pxToRem('10px')} 0;
  padding: 0 ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin: ${pxToRem('30px')} 0;
  }
`;

export const WrapperStyle = styled(CenterRowStyle)`
  width: 100%;
  justify-content: space-around;
  max-width: ${pxToRem('300px')};
`;


export const ButtonListStyle = styled(UnstyledListStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonWrapperStyle = styled.div`
  position: relative;
  z-index: 1;
`;
