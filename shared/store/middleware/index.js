// @flow

import thunk from 'redux-thunk';
import { requestContext } from './requestContext';
import { tracking } from './tracking';

export const middlewares = [thunk, requestContext, tracking];
