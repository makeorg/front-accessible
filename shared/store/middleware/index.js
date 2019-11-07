// @flow

import thunk from 'redux-thunk';
import { requestContext } from './requestContext';

export const middlewares = [thunk, requestContext];
