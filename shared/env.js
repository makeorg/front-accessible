const isDev = () => process.env.NODE_ENV === 'development';
const isTest = () => process.env.NODE_ENV === 'test';
const isNone = () => !process.env.NODE_ENV;

export const env = {
  isDev,
  isNone,
  isTest,
};
