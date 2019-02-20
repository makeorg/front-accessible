const isDev = () => process.env.NODE_ENV === 'development';
const isNone = () => !process.env.NODE_ENV;

const contextEnvName = () => process.env.ENV_NAME;

export const env = {
  isDev,
  isNone,
  contextEnvName
};
