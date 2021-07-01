import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { useTablet } from 'Client/hooks/useMedia';
import { HeroPicturesStyle } from './style';

export const HeroPictures = () => {
  const { device, country } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isDesktopInState = matchDesktopDevice(device);
  const isTabletViewport = useTablet();
  const imageCommonPath = 'https://assets.make.org/assets/home';

  let HeroDesktop = `${imageCommonPath}/hero-desktop-170720.png`;
  let HeroSmallDevices = `${imageCommonPath}/hero-tablettes-170720.png`;

  if (country === 'DE') {
    HeroDesktop = `${imageCommonPath}/homepage_desktop_de.png`;
    HeroSmallDevices = `${imageCommonPath}/homepage_mobile_de.png`;
  }

  let HeroPictureWidth = 335;
  let HeroPictureHeight = 202;

  if (isDesktopInState) {
    HeroPictureWidth = 540;
    HeroPictureHeight = 487;
  }

  if (isTabletViewport && !isDesktopInState) {
    HeroPictureWidth = 728;
    HeroPictureHeight = 465;
  }

  return (
    <HeroPicturesStyle
      width={HeroPictureWidth}
      height={HeroPictureHeight}
      src={isDesktopInState ? HeroDesktop : HeroSmallDevices}
      alt=""
      crop
    />
  );
};
