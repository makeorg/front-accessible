import styled from 'styled-components';
import { IntToPx } from 'Shared/helpers/styled';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const ConsultationPageWrapperStyle = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  flex-flow: column-reverse;
  width: 100%;
  max-width: ${IntToPx(Layouts.ContainerWidth)};
  margin: ${IntToPx(DefaultPadding.Mobile)} auto;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
    justify-content: space-between;
    margin: ${IntToPx(DefaultPadding.Desktop)} auto;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  flex: 1 1 auto;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  max-width: 750px;
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  max-width: 360px;
`;

export const ProposalCardTaggedStyle = styled.div`
  margin: 20px 0;
`;
