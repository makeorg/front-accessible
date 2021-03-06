// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  getA11YPageLink,
  getBrowseConsultationsLink,
  getBrowseResultsLink,
  getParticipateLink,
  getContactPageLink,
  getDataPageLink,
  getGTUPageLink,
  getHomeLink,
  getLegalPageLink,
  getPasswordRecoveryLink,
  getPersonalityProfileLink,
  getProposalLink,
  getResultsLink,
  getSequenceLink,
  getTopIdeaDetailsLink,
  getTopIdeasLink,
} from 'Shared/helpers/url';
import {
  getRouteOrganisationProposals,
  getRouteOrganisationVotes,
  getRouteProfile,
  getRouteProfileEdit,
  getRouteProfileFavourites,
  getRouteProfileOpinions,
  getRouteProfileProposals,
  getRouteSearch,
  getRouteSearchConsultations,
  getRouteSearchOrganisations,
  getRouteSearchProposals,
} from 'Shared/routes';
import { MetaTags } from 'Client/app/MetaTags';
import { env } from 'Shared/env';
import { summary } from 'Shared/constants/accessibilitySummary';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
  StaticPrimaryOrderedListStyle,
  StaticPrimaryOrderedListItemStyle,
  StaticThirdLevelTitleStyle,
  StaticFourthLevelTitleStyle,
  StaticSquareListItemStyle,
  StaticSquareListStyle,
  StaticExternalLinkIconStyle,
  FocusBlockWrapperStyle,
  FocusBlockTitleStyle,
  FocusBlockParagraphStyle,
  FocusBlockCheckIconStyle,
} from '../style';

export const A11yFR = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  return (
    <>
      <MetaTags
        title={i18n.t('meta.a11y.title')}
        description={i18n.t('meta.a11y.description')}
      />
      <StaticPageWrapperStyle>
        <StaticSecondLevelTitleStyle>
          Déclaration d’Accessibilté
        </StaticSecondLevelTitleStyle>
        <StaticParagraphStyle>
          Make.org s’engage à rendre son site internet accessible conformément à
          l’article 47 de la loi n° 2005-102 du 11 février 2005.
        </StaticParagraphStyle>
        <StaticParagraphStyle>
          {'Cette déclaration d’accessibilité s’applique à '}
          <RedLinkHTMLElementStyle href={env.frontUrl()}>
            {env.frontUrl()}
          </RedLinkHTMLElementStyle>
          .
        </StaticParagraphStyle>
        <FocusBlockWrapperStyle as="section">
          <FocusBlockCheckIconStyle aria-hidden focusable="false" />
          <FocusBlockTitleStyle>
            {`${summary.criteria.pourcentOk}% `}
            des critères{' '}
            <abbr title="Référentiel Général d’Amélioration de l’Accessibilité">
              RGAA
            </abbr>{' '}
            4.0 sont respectés
          </FocusBlockTitleStyle>
          <FocusBlockParagraphStyle>
            Make.org s&apos;engage à améliorer l&apos;accessibilité et
            l&apos;inclusion dans le numérique. Le RGAA (référentiel général
            d’amélioration de l’accessibilité) est un document d&apos;autorité,
            énonçant des normes d&apos;accessibilité auxquelles nos équipes de
            conception et techniques cherchent à se rapprocher au maximum.
          </FocusBlockParagraphStyle>
          <FocusBlockParagraphStyle>
            De façon transparente, cette page a pour but d&apos;indiquer
            l&apos;état actuel de l&apos;accessibilité de Make.org.
          </FocusBlockParagraphStyle>
        </FocusBlockWrapperStyle>
        <StaticPrimaryOrderedListStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              État de conformité
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org est en conformité partielle avec le
              <> </>
              <RedLinkHTMLElementStyle
                href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/"
                target="_blank"
                rel="noopener"
              >
                <abbr title="Référentiel Général d’Amélioration de l’Accessibilité - version 4.0">
                  RGAA 4.0
                </abbr>
                <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                <ScreenReaderItemStyle>
                  {i18n.t('common.open_new_window')}
                </ScreenReaderItemStyle>
              </RedLinkHTMLElementStyle>
              .
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              Résultats des tests
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              L’audit de conformité réalisé en interne révèle que :
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                {`${summary.test.successOk} tests sont réalisés avec succès.`}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {`${summary.test.successKo} tests échouent.`}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {`${summary.test.successNa} tests sont relatifs à des critères non applicables.`}
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                {`${summary.criteria.successOk} critères sont respectés.`}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {`${summary.criteria.successKo} critères ne sont pas respectés.`}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {`${summary.criteria.successNa} critères ne sont pas applicables.`}
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Soit
              {` ${summary.criteria.pourcentOk}% critères `}
              <abbr title="Référentiel Général d’Amélioration de l’Accessibilité">
                RGAA 4.0
              </abbr>
              <> </>
              sont respectés.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              Établissement de cette déclaration d’accessibilité
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Cette déclaration a été établie le 04 novembre 2020. Elle a été
              mise jour le 04 novembre 2020.
            </StaticParagraphStyle>
            <StaticFourthLevelTitleStyle>
              Technologies utilisées pour la réalisation du site internet
              Make.org :
            </StaticFourthLevelTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>HTML5</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>CSS</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>Javascript</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                React JS version 16
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Retrouver la
                <> </>
                <RedLinkHTMLElementStyle
                  href="https://gitlab.com/makeorg/platform/front/-/blob/production/package.json"
                  target="_blank"
                  rel="noopener"
                >
                  liste complète des technologies utilisées
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticFourthLevelTitleStyle>
              Agents utilisateurs, technologies d’assistance et outils utilisés
              pour vérifier l’accessibilité :
            </StaticFourthLevelTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                Chrome 86 / Mac OS 10.15 VoiceOver
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Firefox 82.0 / Linux Orca 3.36.2
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticFourthLevelTitleStyle>
              Les outils suivants ont été utilisés lors de l’évaluation :
            </StaticFourthLevelTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle lang="en">
                Google Lighthouse
                <> </>
                <RedLinkHTMLElementStyle
                  href="https://developers.google.com/web/tools/lighthouse#devtools"
                  target="_blank"
                  rel="noopener"
                >
                  DevTools
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle lang="fr">
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle lang="en">
                Google Lighthouse
                <> </>
                <RedLinkHTMLElementStyle
                  href="https://github.com/GoogleChrome/lighthouse-ci"
                  target="_blank"
                  rel="noopener"
                >
                  CI
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle lang="fr">
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                <span lang="en">Web Developer</span>
                <> </>
                <RedLinkHTMLElementStyle
                  href="https://chrispederick.com/work/web-developer/"
                  target="_blank"
                  rel="noopener"
                >
                  extension navigateur
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Axe
                <> </>
                <RedLinkHTMLElementStyle
                  href="https://www.deque.com/axe/browser-extensions/"
                  target="_blank"
                  rel="noopener"
                >
                  extension navigateur
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle lang="en">
                WCAG Color contrast checker
                <> </>
                <RedLinkHTMLElementStyle
                  href="
              https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf"
                  target="_blank"
                  rel="noopener"
                  lang="fr"
                >
                  extension navigateur
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticFourthLevelTitleStyle>
              Les pages du site ayant fait l’objet de la vérification de
              conformité :
            </StaticFourthLevelTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                {"Page d'accueil France : "}
                <RedLinkHTMLElementStyle href={getHomeLink('FR')}>
                  {env.frontUrl() + getHomeLink('FR')}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page d'accueil Grande Bretagne : "}
                <RedLinkHTMLElementStyle href={getHomeLink('GB')}>
                  {env.frontUrl() + getHomeLink('GB')}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page parcourir les consultations : '}
                <RedLinkHTMLElementStyle
                  href={getBrowseConsultationsLink(country)}
                >
                  {env.frontUrl() + getBrowseConsultationsLink(country)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page parcourir les résultats : '}
                <RedLinkHTMLElementStyle href={getBrowseResultsLink(country)}>
                  {env.frontUrl() + getBrowseResultsLink(country)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page consultation : '}
                {env.frontUrl() + getParticipateLink(country, 'dynamicslug')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de propositions en séquence : '}
                {env.frontUrl() + getSequenceLink(country, 'dynamicslug')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de résultat d'une consultation : "}
                {env.frontUrl() + getResultsLink(country, 'dynamicslug')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page du top des idées d'une consultation : "}
                {env.frontUrl() + getTopIdeasLink(country, 'dynamicslug')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de détails d'une top idée d'une consultation : "}
                {env.frontUrl() +
                  getTopIdeaDetailsLink(country, 'dynamicslug', 'ideaId')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de proposition : '}
                {env.frontUrl() +
                  getProposalLink(
                    country,
                    'dynamicslug',
                    'proposalSlug',
                    'proposalId'
                  )}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de réinitialisation du mot de passe : '}
                {env.frontUrl() +
                  getPasswordRecoveryLink(country, 'userId', 'resetToken')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de profil utilisateur : '}
                {env.frontUrl() + getRouteProfile(country)}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page d'édition du profil utilisateur : "}
                {env.frontUrl() + getRouteProfileEdit(country)}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de la liste des propositions de l'utilisateur : "}
                {env.frontUrl() + getRouteProfileProposals(country)}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {
                  "Page de la liste des propositions favorites de l'utilisateur : "
                }
                {env.frontUrl() + getRouteProfileFavourites(country)}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page des opinions d'une personnalité : "}
                {env.frontUrl() + getRouteProfileOpinions(country)}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de profil public d'une personnalité : "}
                {env.frontUrl() + getPersonalityProfileLink(country, 'userId')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de propositions d'un profil public d'organisation : "}
                {env.frontUrl() +
                  getRouteOrganisationProposals(country, 'userId')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de votes d'un profil public d'organisation : "}
                {env.frontUrl() + getRouteOrganisationVotes(country, 'userId')}
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de résultats de recherche : '}
                <RedLinkHTMLElementStyle
                  href={getRouteSearch(country, 'accessibilité')}
                >
                  {env.frontUrl() + getRouteSearch(country, 'accessibilité')}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de résultats de recherche des propositions : '}
                <RedLinkHTMLElementStyle
                  href={getRouteSearchProposals(country, 'accessibilité')}
                >
                  {env.frontUrl() +
                    getRouteSearchProposals(country, 'accessibilité')}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de résultats de recherche des organisations : '}
                <RedLinkHTMLElementStyle
                  href={getRouteSearchOrganisations(country, 'association')}
                >
                  {env.frontUrl() +
                    getRouteSearchOrganisations(country, 'association')}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de résultats de recherche des consultations : '}
                <RedLinkHTMLElementStyle
                  href={getRouteSearchConsultations(country, 'comment')}
                >
                  {env.frontUrl() +
                    getRouteSearchConsultations(country, 'comment')}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de mentions légales : '}
                <RedLinkHTMLElementStyle
                  href={getLegalPageLink(country, language)}
                >
                  {env.frontUrl() + getLegalPageLink(country, language)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de conditions d'utilisation : "}
                <RedLinkHTMLElementStyle
                  href={getGTUPageLink(country, language)}
                >
                  {env.frontUrl() + getGTUPageLink(country, language)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de politique de données : '}
                <RedLinkHTMLElementStyle
                  href={getDataPageLink(country, language)}
                >
                  {env.frontUrl() + getDataPageLink(country, language)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {"Page de déclaration d'accessibilité : "}
                <RedLinkHTMLElementStyle
                  href={getA11YPageLink(country, language)}
                >
                  {env.frontUrl() + getA11YPageLink(country, language)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Page de contact : '}
                <RedLinkHTMLElementStyle
                  href={getContactPageLink(country, language)}
                >
                  {env.frontUrl() + getContactPageLink(country, language)}
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              Retour d’information et contact
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
              pouvez contacter le responsable du site internet pour être orienté
              vers une alternative accessible ou obtenir le contenu sous une
              autre forme.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              {'Contactez-nous à cette adresse email : '}
              <RedLinkHTMLElementStyle href="mailto:accessibility@make.org">
                accessibility@make.org
              </RedLinkHTMLElementStyle>
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
        </StaticPrimaryOrderedListStyle>
      </StaticPageWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default A11yFR; // eslint-disable-line import/no-default-export
