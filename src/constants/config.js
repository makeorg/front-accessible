const FRONT_URL = (
  typeof window !== 'undefined'
  && window
  && window.FRONT_URL
  && window.FRONT_URL !== '__FRONT_URL__'
) ? window.FRONT_URL : 'https://www.preprod.makeorg.tech';


export const consultationLink = `${FRONT_URL}/FR#/FR/consultation/aines/consultation`;
