import React from 'react';
import {
  PicturesWrapperStyle,
  FirstPicture,
  SecondPicture,
  ThirdPicture,
} from './style';
import { useDesktop, useTablet } from '../../../hooks/useMedia';

export const HeroPictures = () => {
  const isDesktop = useDesktop();
  const isTablet = useTablet();
  let FirstPictureSize = { width: 207, height: 241 };
  let OtherPicturesSize = { width: 118, height: 107 };

  if (isTablet) {
    FirstPictureSize = { width: 366, height: 427 };
    OtherPicturesSize = { width: 210, height: 191 };
  }
  if (isDesktop) {
    FirstPictureSize = { width: 398, height: 465 };
    OtherPicturesSize = { width: 262, height: 238 };
  }

  return (
    <PicturesWrapperStyle>
      <FirstPicture
        width={FirstPictureSize.width}
        height={FirstPictureSize.heigth}
        src="https://assets.make.org/assets/home/republique-150720.png"
        alt=""
      />
      <SecondPicture
        width={OtherPicturesSize.width}
        height={OtherPicturesSize.heigth}
        src="https://assets.make.org/assets/home/equipe-15072020.png"
        alt=""
      />
      <ThirdPicture
        width={OtherPicturesSize.width}
        height={OtherPicturesSize.heigth}
        src="https://assets.make.org/assets/home/prise-de-parole-150720.png"
        alt=""
      />
    </PicturesWrapperStyle>
  );
};
