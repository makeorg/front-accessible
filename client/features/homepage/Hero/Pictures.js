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
        src="https://via.placeholder.com/398x465.png"
        alt="statue de la place de la republique"
      />
      <SecondPicture
        width={OtherPicturesSize.width}
        height={OtherPicturesSize.heigth}
        src="https://via.placeholder.com/262x238.png"
        alt="groupe de personnes se prenant dans les bras"
      />
      <ThirdPicture
        width={OtherPicturesSize.width}
        height={OtherPicturesSize.heigth}
        src="https://via.placeholder.com/262x238.png"
        alt="femme faisant un discours en public"
      />
    </PicturesWrapperStyle>
  );
};
