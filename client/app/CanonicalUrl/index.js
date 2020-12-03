// @flow
import React from 'react';
import { Link } from 'react-head';
import { useLocation } from 'react-router';
import { env } from 'Shared/env';

export const CanonicalUrl = () => {
  const { pathname, search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const canonicalUrlParams = new URLSearchParams();
  let canonicalSearch = '';

  // accept only query param for search
  if (urlParams.has('query') === true) {
    const value = urlParams.get('query');
    canonicalUrlParams.append('query', value);
    canonicalSearch = `?${canonicalUrlParams.toString()}`;
  }

  return (
    <Link
      rel="canonical"
      href={`${env.frontUrl()}${pathname}${canonicalSearch}`}
      data-cy="canonical_url"
    />
  );
};
