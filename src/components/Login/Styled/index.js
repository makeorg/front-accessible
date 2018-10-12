import styled from 'styled-components';
import { rem } from 'polished';
import {
  SepWrapper,
  SepText,
  Form,
  ExtraParagraph,
  ExtraAltParagraph,
  RedLinkButton
} from './Content';

const Login = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${rem('490px')};
  max-width: ${rem('470px')};
`;

/* Content */
Login.SepWrapper = SepWrapper;
Login.SepText = SepText;
Login.Form = Form;
Login.ExtraParagraph = ExtraParagraph;
Login.ExtraAltParagraph = ExtraAltParagraph;
Login.RedLinkButton = RedLinkButton;

export default Login;
