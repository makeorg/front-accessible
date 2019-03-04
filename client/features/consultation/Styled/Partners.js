import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { IntToPx } from 'Shared/helpers/styled';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const ParticipateButtonStyle = styled(LinkAsRedButton)`
  margin: 5px 0;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    margin: 15px 0;
  }
`;

export const PartnersListStyle = styled(UnstyledListStyle)`
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

export const AvatarWrapperStyle = styled.div`
  position: relative;
  z-index: 1;
`;

export const AvatarStyle = styled.img`
  border-radius: 50px;
  overflow: hidden;
`;
