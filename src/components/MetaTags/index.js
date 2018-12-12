// @flow

import React from 'react';
import i18next from 'i18next';
import { Title, Meta } from 'react-head';

type Props = {
  title: ?String,
  description: ?String,
  picture: ?String,
};

const MetaTags = (props: Props) => {
  const { title, description, picture } = props;

  return (
    <React.Fragment>
      <Title>{title || i18next.t('meta.home.title')}</Title>
      <Meta name="description" content={description || i18next.t('meta.home.description')} />
      <Meta itemProp="name" content={title || i18next.t('meta.home.title')} />
      <Meta itemProp="description" content={description || i18next.t('meta.home.description')} />
      <Meta itemProp="image" content={picture || i18next.t('meta.home.picture')} />
      <Meta property="og:title" content={title || i18next.t('meta.home.title')} />
      <Meta property="og:description" content={description || i18next.t('meta.home.description')} />
      <Meta property="og:headline" content={description || i18next.t('meta.home.description')} />
      <Meta property="og:image" content={picture || i18next.t('meta.home.picture')} />
      <Meta name="twitter:card" content="summary" />
      <Meta property="twitter:title" content={title || i18next.t('meta.home.title')} />
      <Meta property="twitter:description" content={description || i18next.t('meta.home.description')} />
      <Meta property="twitter:image" content={picture || i18next.t('meta.home.picture')} />
    </React.Fragment>
  );
};

export default MetaTags;
