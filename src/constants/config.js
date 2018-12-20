export const FRONT_URL = (
  typeof window !== 'undefined'
  && window
  && window.FRONT_URL
  && window.FRONT_URL !== '__FRONT_URL__'
) ? window.FRONT_URL : 'https://accessible.preprod.makeorg.tech';
