import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';

export const consultationRoute = async (req, res) => {
  let routeState = {};

  try {
    routeState = {};
  } catch (error) {
    logError(error);

    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
