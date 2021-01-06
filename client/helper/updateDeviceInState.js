// @flow
import { Logger } from 'Shared/services/Logger';
import {
  intToPx,
  matchDesktopDevice,
  matchMobileDevice,
} from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  setDesktopDevice,
  setMobileDevice,
} from 'Shared/store/actions/appConfig';

export const updateDeviceInState = (deviceInState: string) => {
  if (!window.matchMedia) {
    Logger.logWarning('window.matchMedia is not supported');
    return null;
  }

  let actionToDispatch = () => {};
  const isMobileInState = matchMobileDevice(deviceInState);
  const isDesktopInState = matchDesktopDevice(deviceInState);
  const mqlDesktopViewport = window.matchMedia(
    `(min-width: ${intToPx(Breakpoints.Desktop)})`
  );

  // Viewport prevails on device;
  // Viewport has a desktop width but deviceInState is mobile
  if (mqlDesktopViewport.matches && isMobileInState) {
    actionToDispatch = setDesktopDevice();
  }

  // Viewport doesn't have a desktop width but deviceInState is desktop
  if (!mqlDesktopViewport.matches && isDesktopInState) {
    actionToDispatch = setMobileDevice();
  }

  return actionToDispatch;
};
