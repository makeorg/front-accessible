import styled from 'styled-components';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const ProposalFooterStyle = styled.div`
  width: 100%;
  display: inline-block;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const ProposalFooterTagListStyle = styled(UnstyledListStyle)`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const ProposalFooterTagListItemStyle = styled(ParagraphStyle)`
  display: inline-flex;
  margin-right: 10px;
  text-decoration: underline;
`;

export const PostedInLabelStyle = styled(ParagraphStyle)`
  margin-right: 5px;
`;
