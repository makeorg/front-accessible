import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import {
  FeaturedWrapperStyle,
  FeaturedWrapperTitleStyle,
  FeaturedArticleWrapperStyle,
  FeaturedInformationsWraperStyle,
  FeaturedArticleStyle,
  FeaturedLabelStyle,
  FeaturedArticleTitleStyle,
  FeaturedDescriptionStyle,
  FeaturedLinkStyle,
  FeaturedImageStyle,
  FeaturedArticleColumnStyle,
} from './Styled';

export const FeaturedConsultations = () => {
  return (
    <FeaturedWrapperStyle>
      <FeaturedWrapperTitleStyle>
        {i18n.t('homepage.featured.title')}
      </FeaturedWrapperTitleStyle>
      <FeaturedArticleWrapperStyle>
        <FeaturedArticleStyle>
          <FeaturedImageStyle
            src=" https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg"
            srcSet="https://make.org/images/mieux-manger-500x375.c7edda1728d5bba8bf22c70585bef4a9.jpg 500w, https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg 1140w"
            alt=""
          />
          <FeaturedInformationsWraperStyle>
            <FeaturedLabelStyle>Grande cause Make.org</FeaturedLabelStyle>
            <FeaturedArticleTitleStyle>
              Comment permettre à chacun de mieux manger ?
            </FeaturedArticleTitleStyle>
            <FeaturedDescriptionStyle>
              Proposez vos solutions et votez sur celles des autres.
            </FeaturedDescriptionStyle>
            <FeaturedLinkStyle as={Link} to="#">
              Votez maintenant
            </FeaturedLinkStyle>
          </FeaturedInformationsWraperStyle>
        </FeaturedArticleStyle>
        <FeaturedArticleColumnStyle>
          <FeaturedArticleStyle>
            <FeaturedImageStyle
              src=" https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg"
              srcSet="https://make.org/images/mieux-manger-500x375.c7edda1728d5bba8bf22c70585bef4a9.jpg 500w, https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg 1140w"
              alt=""
            />
            <FeaturedInformationsWraperStyle>
              <FeaturedLabelStyle>Grande cause Make.org</FeaturedLabelStyle>
              <FeaturedArticleTitleStyle>
                Comment permettre à chacun de mieux manger ?
              </FeaturedArticleTitleStyle>
              <FeaturedDescriptionStyle>
                Proposez vos solutions et votez sur celles des autres.
              </FeaturedDescriptionStyle>
              <FeaturedLinkStyle as={Link} to="#">
                Votez maintenant
              </FeaturedLinkStyle>
            </FeaturedInformationsWraperStyle>
          </FeaturedArticleStyle>
          <FeaturedArticleStyle>
            <FeaturedImageStyle
              src=" https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg"
              srcSet="https://make.org/images/mieux-manger-500x375.c7edda1728d5bba8bf22c70585bef4a9.jpg 500w, https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg 1140w"
              alt=""
            />
            <FeaturedInformationsWraperStyle>
              <FeaturedLabelStyle>Grande cause Make.org</FeaturedLabelStyle>
              <FeaturedArticleTitleStyle>
                Comment permettre à chacun de mieux manger ?
              </FeaturedArticleTitleStyle>
              <FeaturedDescriptionStyle>
                Proposez vos solutions et votez sur celles des autres.
              </FeaturedDescriptionStyle>
              <FeaturedLinkStyle as={Link} to="#">
                Votez maintenant
              </FeaturedLinkStyle>
            </FeaturedInformationsWraperStyle>
          </FeaturedArticleStyle>
        </FeaturedArticleColumnStyle>
      </FeaturedArticleWrapperStyle>
    </FeaturedWrapperStyle>
  );
};
