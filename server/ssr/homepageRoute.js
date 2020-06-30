// @flow
import { createInitialState } from 'Shared/store/initialState';
import { type Request, type Response } from 'express';
import { type HomeViewType } from 'Shared/types/views';
import { type StateRoot as TypeStateRoot } from 'Shared/store/types';
import { ViewsService } from 'Shared/services/Views';
import { reactRender } from '../reactRender';

export const homepageRoute = async (req: Request, res: Response) => {
  const routeState: TypeStateRoot = createInitialState();

  const { country, language } = req.params;
  const homepageData: ?HomeViewType = await ViewsService.getHome(
    country,
    language
  );

  if (!homepageData) {
    return reactRender(req, res.status(404), routeState);
  }
  routeState.views = {
    homepage: homepageData,
  };

  return reactRender(req, res, routeState);
};
