// @flow

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { setLanguageCode } from 'Shared/store/actions/appConfig';

export const LanguageListener = () => {
  const query = new URLSearchParams(useLocation().search);
  const language = query.get('lang');
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (language) {
        dispatch(setLanguageCode(language));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  );

  return null;
};
