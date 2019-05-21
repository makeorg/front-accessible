import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepageInnerContentStyle } from 'Client/pages/Home/Styled';
import {
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
    <HomepageInnerContentStyle aria-labelledby="featured_title">
      <HomeTitleStyle id="featured_title">
        {i18n.t('homepage.featured.title')}
      </HomeTitleStyle>
      <FeaturedArticleWrapperStyle>
        <FeaturedArticleStyle aria-labelledby="article_title_1">
          <FeaturedImageStyle
            src=" https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg"
            srcSet="https://make.org/images/mieux-manger-500x375.c7edda1728d5bba8bf22c70585bef4a9.jpg 500w, https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg 1140w"
            alt=""
          />
          <FeaturedInformationsWraperStyle>
            <FeaturedLabelStyle>Grande cause Make.org</FeaturedLabelStyle>
            <FeaturedArticleTitleStyle id="article_title_1">
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
          <FeaturedArticleStyle aria-labelledby="article_title_2">
            <FeaturedImageStyle
              src=" https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg"
              srcSet="https://make.org/images/mieux-manger-500x375.c7edda1728d5bba8bf22c70585bef4a9.jpg 500w, https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg 1140w"
              alt=""
            />
            <FeaturedInformationsWraperStyle>
              <FeaturedLabelStyle>Grande cause Make.org</FeaturedLabelStyle>
              <FeaturedArticleTitleStyle id="article_title_2">
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
          <FeaturedArticleStyle aria-labelledby="article_title_3">
            <FeaturedImageStyle
              src=" https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg"
              srcSet="https://make.org/images/mieux-manger-500x375.c7edda1728d5bba8bf22c70585bef4a9.jpg 500w, https://make.org/images/mieux-manger-1140x440.d46e48757c6468e48920eb239079de79.jpg 1140w"
              alt=""
            />
            <FeaturedInformationsWraperStyle>
              <FeaturedLabelStyle>Grande cause Make.org</FeaturedLabelStyle>
              <FeaturedArticleTitleStyle id="article_title_3">
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
    </HomepageInnerContentStyle>
  );
};
