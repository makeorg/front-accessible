import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { ButtonList, Fieldset } from './Form';

const Vote = styled.form`
    display: flex;
    width: 100%;
    max-width: ${pxToRem('250px')};
    margin: ${pxToRem('30px')} 0;
`;

/* Buttons */
Vote.ButtonList = ButtonList;
Vote.Fieldset = Fieldset;

export default Vote;
