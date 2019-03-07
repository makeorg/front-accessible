import styled from 'styled-components';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const ParticipateButtonStyle = styled(LinkAsRedButton)`
  margin: 10px 0 15px;
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
