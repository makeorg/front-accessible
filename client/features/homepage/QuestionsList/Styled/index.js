import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const QuestionListTitleStyle = styled.h2`
  font-size: 20px;
  line-height: 1;
  margin-bottom: 25px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 24px;
  }
`;
export const QuestionsListStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-flow: column;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const QuestionItemStyle = styled.li`
  display: flex;
  border-radius: 8px;
  background-color: rgb(242, 242, 242);
  overflow: hidden;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 15px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const QuestionLinkStyle = styled(Link)`
  display: flex;
  text-decoration: none;
  font-family: ${MakeFonts.RobotoBold};
  font-size: 13px;
  line-height: 1.4;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const QuestionStyle = styled.div`
  padding: 15px;
`;

export const QuestionStatusStyle = styled.p`
  font-family: ${MakeFonts.RobotoCondensedBold};
  color: ${TextColors.MediumGrey};
  text-transform: uppercase;
  margin-bottom: 5px;
  line-height: 1;
`;

export const QuestionBorderStyle = styled.div`
  width: 6px;
  background: linear-gradient(
    352deg,
    ${props => props.colorStart},
    ${props => props.colorEnd}
  );
`;

export const QuestionArrowStyle = {
  justifySelf: 'center',
  alignSelf: 'center',
  marginRight: '5px',
};
