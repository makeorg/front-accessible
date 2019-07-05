import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';

export const ProposalsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 30px 21px;
  background-color: #f2f2f2;
`;

export const ProposalsContentStyle = styled.section`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: ${intToPx(Layouts.ContainerWidth)};
  }
`;

export const ProposalsIntroStyle = styled.span`
  display: block;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 16px;
  text-transform: none;
  margin-bottom: 10px;
`;

export const ProposalsListStyle = styled.div`
  display: flex;
  width: 100%;
  & > article {
    margin-right: 16px;
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      max-width: 50%;
    }
  }
`;
