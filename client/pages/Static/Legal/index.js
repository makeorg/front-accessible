// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from '../Styled';

export const LegalPage = () => {
  return (
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        Mentions légales
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        Editeur du site : MAKE.ORG, Société par Actions Simplifiées au capital
        de 1000 euros, ayant son siège social au 4 rue René Villermé, 75011,
        PARIS, immatriculée au RCS de PARIS sous le numéro 820 016 095
        (ci-après« MAKE.ORG »).
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Adresse de courrier électronique :&nbsp;
        <RedLinkHTMLElementStyle as="a" href="mailto:contact@make.org">
          contact@make.org
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Numéro de téléphone : 01.44.74.77.46
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Directeur de Publication : Axel Dauchez
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Hébergeur du site : OVH, 2 rue Kellermann, 59100, ROUBAIX
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Numéro de téléphone : 08 99 70 17 61
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Numéro de déclaration CNIL : 2005312
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  );
};

// default export needed for loadable component
export default LegalPage; // eslint-disable-line import/no-default-export
