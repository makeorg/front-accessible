// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';
import { Title, Meta } from 'react-head';

type Props = {
  /** String used for title tag in header */
  title?: string,
  /** String used for description tag in header */
  description?: string,
  /** String used for image itemprop meta tag in header */
  picture?: string,
};

export const MetaTags = (props: Props) => {
  const { title, description, picture } = props;

  return (
    <>
      <Title>
        {`${title || i18n.t('meta.deprecated-home.title')} - Make.org`}
      </Title>
      <Meta
        name="description"
        content={description || i18n.t('meta.deprecated-home.description')}
      />
      <Meta
        property="og:title"
        content={title || `${i18n.t('meta.deprecated-home.title')} - Make.org`}
      />
      <Meta
        property="og:description"
        content={description || i18n.t('meta.deprecated-home.description')}
      />
      <Meta
        property="og:headline"
        content={description || i18n.t('meta.deprecated-home.description')}
      />
      <Meta
        property="og:image"
        content={picture || i18n.t('meta.deprecated-home.picture')}
      />
      <Meta name="twitter:card" content="summary" />
      <Meta
        property="twitter:title"
        content={title || `${i18n.t('meta.deprecated-home.title')} - Make.org`}
      />
      <Meta
        property="twitter:description"
        content={description || i18n.t('meta.deprecated-home.description')}
      />
      <Meta
        property="twitter:image"
        content={picture || i18n.t('meta.deprecated-home.picture')}
      />
    </>
  );
};

MetaTags.defaultProps = {
  title: undefined,
  description: undefined,
  picture: undefined,
};
