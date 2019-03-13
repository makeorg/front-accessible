import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
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
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: ${intToPx(DefaultPadding.Mobile)} auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    justify-content: space-between;
    margin: ${intToPx(DefaultPadding.Desktop)} auto;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  flex: 1 1 auto;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 750px;
    margin-right: 15px;
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  position: sticky;
  ${props =>
    props.bottomAffix ? 'bottom: 0; align-self: flex-end' : 'top: 0'};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 360px;
  }
`;

export const ProposalCardTaggedStyle = styled.div`
  margin: 20px 0;
`;
