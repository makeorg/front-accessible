// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from './style';

export const Contact = () => {
  return (
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>Contactez-nous </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        Une idée, une suggestion, un bug ? N’hésitez pas à nous contacter en
        envoyant un e-mail à notre adresse :&nbsp;
        <RedLinkHTMLElementStyle href="mailto:contact@make.org">
          contact@make.org
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  );
};

// default export needed for loadable component
export default Contact; // eslint-disable-line import/no-default-export
