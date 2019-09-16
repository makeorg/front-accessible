const isDev = () => process.env.NODE_ENV === 'development';
const isTest = () => process.env.NODE_ENV === 'test';
const isNone = () => !process.env.NODE_ENV;

const contextEnvName = () => process.env.ENV_NAME;

export const env = {
  isDev,
  isNone,
  isTest,
  contextEnvName,
};
