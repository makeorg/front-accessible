// @flow
import React from 'react';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from '../Styled';

export const Contact = () => {
  return (
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>Contactez-nous </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        Une idée, une suggestion, un bug ? N’hésitez pas à nous contacter en
        envoyant un e-mail à notre adresse :
        <RedLinkStyle href="mailto:contact@make.org">
          contact@make.org
        </RedLinkStyle>
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  );
};

// default export needed for loadable component
export default Contact; // eslint-disable-line import/no-default-export
