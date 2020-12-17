// @flow

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ROUTE_COUNTRY } from 'Shared/routes';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { setCountryCode } from 'Shared/store/actions/appConfig';

export const CountryListener = () => {
  const { params } = useRouteMatch({ path: ROUTE_COUNTRY }) || { params: {} };
  const { country } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountryCode(country));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return null;
};
