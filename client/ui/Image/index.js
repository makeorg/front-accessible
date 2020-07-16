import React from 'react';
import {
  type ImageDataType,
  IMAGE_SOURCE_INTERNAL,
  IMAGE_SOURCE_EXTERNAL,
} from 'Shared/types/image';

const imageflowQueryParams = (width: ?number, height: ?number) =>
  `?w=${width || ''}&h=${height || ''}`;

type Props = {
  /** image source */
  src: string | ImageDataType,
  /** image className */
  className?: string,
  /** image alternative */
  alt?: string,
  /** image src set */
  srcSet?: string,
  /** image width */
  width?: number,
  /** Image height */
  height?: number,
  /** image key */
  key: string | number,
};

const isInternalSourceUrl = url => {
  return (
    url &&
    url.toLowerCase().includes('assets') &&
    url.toLowerCase().includes('make')
  );
};

const isImageSupportedByImageFlow = url =>
  /\.(jpg|jpeg|gif|png)($|\?)/.test(url.toLowerCase());

const getImageFlowSrcs = (url, width, height) => {
  if (!url) {
    return {};
  }
  if (!width && !height) {
    return { srcValue: url };
  }
  if (!isImageSupportedByImageFlow(url)) {
    return { srcValue: url };
  }
  const src = url.replace(/\?.*/g, "$'");
  const paramsSrc1x = imageflowQueryParams(width, height);
  const paramsSrc2x = imageflowQueryParams(width * 2, height * 2);
  const paramsSrc3x = imageflowQueryParams(width * 3, height * 3);

  return {
    srcValue: `${src}${paramsSrc1x}`,
    srcSetValue: `${src}${paramsSrc2x} 2x, ${src}${paramsSrc3x} 3x`,
  };
};

const toImageData = (src: string, alt: string) => ({
  url: src,
  alt,
  source: isInternalSourceUrl(src)
    ? IMAGE_SOURCE_INTERNAL
    : IMAGE_SOURCE_EXTERNAL,
});

const isImageData = value => value && !!value.url;

const isImageWithInternalSource = (imageData: ImageDataType) => {
  return imageData.source === IMAGE_SOURCE_INTERNAL;
};

const getSrcs = (imageData, width, height) => {
  return isImageWithInternalSource(imageData)
    ? getImageFlowSrcs(imageData.url, width, height)
    : { srcValue: imageData.url };
};

export const Image = ({
  width,
  height,
  key,
  className,
  src,
  alt,
  srcSet,
}: Props) => {
  // @toDo: API should return the imageData object
  const imgData = isImageData(src) ? src : toImageData(src, alt);

  const { srcValue, srcSetValue } = getSrcs(imgData, width, height);

  return (
    <img
      src={srcValue}
      srcSet={srcSet || srcSetValue}
      alt={alt || imgData.alt || ''}
      key={key}
      className={className}
      loading="lazy"
      width={width ? `${width}px` : null}
      height={height ? `${height}px` : null}
    />
  );
};
