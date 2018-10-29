import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { ButtonList, ButtonWrapper } from './Form';

const Vote = styled.form`
    display: flex;
    width: 100%;
    max-width: ${pxToRem('250px')};
    margin: ${pxToRem('30px')} 0;
`;

/* Buttons */
Vote.ButtonList = ButtonList;
Vote.ButtonWrapper = ButtonWrapper;

export default Vote;
