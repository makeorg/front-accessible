import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const ConsultationPageWrapperStyle = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 15px auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 30px auto;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 10px 0 20px;
    max-width: 780px;
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 0;
    padding: 0 20px 0 10px;
    order: 1;
    max-width: 390px;
    position: sticky;
    ${props =>
      props.bottomAffix
        ? `bottom: 0; align-self: flex-end`
        : 'top: 0; align-self: flex-start'};
  }
`;

export const ConsultationIconStyle = styled.span`
  display: inline-flex;
  margin-right: 7.5px;
  path.tofill {
    fill: ${BasicColors.PureBlack};
  }
`;
