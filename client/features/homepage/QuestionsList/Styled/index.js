import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextColors } from 'Client/app/assets/vars/Colors';

export const QuestionsListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionItemStyle = styled.li`
  display: flex;
  width: 30%;
`;

export const QuestionLinkStyle = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const QuestionStyle = styled.div`
  font-weight: bold;
  border-radius: 8px;
  background-color: rgb(242, 242, 242);
  padding: 15px;
`;

export const QuestionStatusStyle = styled.div`
  color: ${TextColors.Grey};
  text-transform: uppercase;
`;

export const QuestionBorderStyle = styled.div`
  width: 6px;
  background: linear-gradient(
    352deg,
    ${props => props.colorStart},
    ${props => props.colorEnd}
  );
`;

export const QuestionArrowStyle = styled.div`
  display: flex;
  align-self: center;
`;
