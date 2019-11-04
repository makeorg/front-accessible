/* @flow */
import { useSelector } from 'react-redux';

export const useCustomDataSelector = (key: string) => {
  const customData = useSelector(state => state.customData);
  return customData[key];
};
