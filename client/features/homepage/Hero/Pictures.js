import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { HeroPicturesStyle } from './style';

export const HeroPictures = () => {
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isDesktop = matchDesktopDevice(device);

  const HeroDesktop =
    'https://assets.make.org/assets/home/hero-desktop-170720.png';
  const HeroSmallDevices =
    'https://assets.make.org/assets/home/hero-tablettes-170720.png';

  let HeroPictureSize = { width: 928, height: 427 };

  if (isDesktop) {
    HeroPictureSize = { width: 680, height: 613 };
  }

  return (
    <HeroPicturesStyle
      width={HeroPictureSize.width}
      height={HeroPictureSize.heigth}
      src={isDesktop ? HeroDesktop : HeroSmallDevices}
      alt=""
    />
  );
};
