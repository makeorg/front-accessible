import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { intToPx } from 'Shared/helpers/styled';

export const LocalActorItemStyle = styled.li`
  display: flex;
  align-items: center;
  color: ${color.greyDark};
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  padding: 20px 0;
  border-bottom: 1px solid ${color.greyLighter};

  &:nth-child(1) {
    padding-top: 4px;
  }
`;

export const AvatarStyle = styled.div`
  display: flex;
  margin-right: 5px;
`;

export const ButtonWrapperStyle = styled(RedButtonStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

export const FooterStyle = styled(ParagraphStyle)`
  margin-top: 20px;
`;

export const LocalActorCountStyle = styled.div`
  margin-top: 5px;
`;
