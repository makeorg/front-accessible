import styled from 'styled-components';
import { FormColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { UnstyledButtonStyle } from '../../ButtonElements';

export const FormErrorsContainerStyle = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: ${intToPx(Elements.BorderRadius)};
  background-color: ${FormColors.ErrorBackground};
  font-size: 12px;
  line-height: 1.5;
`;

export const FormErrorsIntroStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBold};
  margin: 0 0 10px;
`;

export const FormErrorsListItemStyle = styled.li`
  margin: 0 0 5px;
  &:last-child {
    margin: 0;
  }
  &:before {
    content: '-  ';
  }
`;

export const CustomErrorTriggerStyle = styled(UnstyledButtonStyle)`
  display: inline-flex;
  font-family: ${MakeFonts.CircularStandardBold};
  text-decoration: underline;
  margin-left: 5px;
`;
