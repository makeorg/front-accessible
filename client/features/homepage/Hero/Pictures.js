import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { useTablet } from 'Client/hooks/useMedia';
import { HeroPicturesStyle } from './style';

export const HeroPictures = () => {
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isDesktopInState = matchDesktopDevice(device);
  const isTabletViewport = useTablet();

  const HeroDesktop =
    'https://assets.make.org/assets/home/hero-desktop-170720.png';
  const HeroSmallDevices =
    'https://assets.make.org/assets/home/hero-tablettes-170720.png';

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
