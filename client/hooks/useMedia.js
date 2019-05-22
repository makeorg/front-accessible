// @flow
import { useState, useEffect } from 'react';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const useMedia = (query: String) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!isMounted) {
        return;
      }
      setValue(!!mql.matches);
    };

    mql.addListener(onChange);

    setValue(mql.matches);
    return () => {
      isMounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return value;
};

export const useDesktop = () => {
  return useMedia(`(min-width: ${intToPx(Breakpoints.Desktop)})`);
};

export const useMobile = () => {
  return useMedia(`(max-width: ${intToPx(Breakpoints.Tablet)})`);
};
