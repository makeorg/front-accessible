const isDev = () => process.env.NODE_ENV === 'development';
const isProd = () => process.env.NODE_ENV === 'prod';
const isNone = () => !process.env.NODE_ENV;
const isPreprod = () => process.env.NODE_ENV === 'preprod';

export const env = {
  isDev,
  isProd,
  isNone,
  isPreprod
};
