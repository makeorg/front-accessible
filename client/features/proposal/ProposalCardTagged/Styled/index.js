import styled from 'styled-components';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ProposalStyle = styled.blockquote`
  max-width: 100%;
  font-size: 30px;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  margin: ${DefaultPadding.Mobile}px 0 0 0;
  align-self: flex-start;
`;

export const HeaderStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-self: flex-start;
`;

export const FooterStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-self: flex-start;
  flex-wrap: wrap;
`;

export const AvatarStyle = styled.div`
  margin-right: 6px;
`;
