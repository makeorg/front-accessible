// @flow

import thunk from 'redux-thunk';
import { requestContext } from './requestContext';
import { question } from './question';
import { countryLanguage, language } from './countryLanguage';

export const middlewares = [
  thunk,
  requestContext,
  question,
  countryLanguage,
  language,
];
