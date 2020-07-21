import React from 'react';
import { HeroPicturesStyle } from './style';
import { useDesktop } from '../../../hooks/useMedia';

export const HeroPictures = () => {
  const isDesktop = useDesktop();

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
