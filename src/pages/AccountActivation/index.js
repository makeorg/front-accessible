/* @flow */

import React from 'react';
import { Redirect } from 'react-router-dom';
import 'url-search-params-polyfill';

export const AccountActivationPage = (props) => {
  const { location, match } = props;
  const params = new URLSearchParams(location.search);
  const questionSlug = params.get('questionSlug');
  const redirectPath = !questionSlug
    ? `/${match.params.countryLanguage}`
    : `/${match.params.countryLanguage}/consultation/${questionSlug}/selection`;
  return (
    <Redirect path="/:countryLanguage/account-activation/:userId/:verificationToken" to={redirectPath} />
  );
};
