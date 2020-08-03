import React, { useState, useEffect, useMemo } from 'react';
import {
  type ImageDataType,
  IMAGE_SOURCE_INTERNAL,
  IMAGE_SOURCE_EXTERNAL,
} from 'Shared/types/image';
import { useDevicePixelRatio } from 'Client/hooks/useMedia';

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
  key?: string | number,
  /** image loading */
  loading?: string,
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
    return { src1x: '' };
  }
  if (!width && !height) {
    return { src1x: url };
  }
  if (!isImageSupportedByImageFlow(url)) {
    return { src1x: url };
  }
  const src = url.replace(/\?.*/g, "$'");
  const paramsSrc1x = imageflowQueryParams(width, height);
  const paramsSrc2x = imageflowQueryParams(width * 2, height * 2);
  const paramsSrc3x = imageflowQueryParams(width * 3, height * 3);

  return {
    src1x: `${src}${paramsSrc1x}`,
    src2x: `${src}${paramsSrc2x}`,
    src3x: `${src}${paramsSrc3x}`,
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

const defaultPlaceHolderImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAAABKklEQVR42u3RMQEAAAjDMObfLQbABAdHKqFJT+lRAQJEQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAQEiAlABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRABASIgAARECACAkRAgAABIiBABASIgAARECACIiBABASIgAARECACIiBABASILluohIUgz8ZhMAAAAABJRU5ErkJggg==';

const selectImageToLoad = (ratio, src1x, src2x, src3x) => {
  if (ratio === 2 && src2x) {
    return src2x;
  }
  if (ratio === 3 && src3x) {
    return src3x;
  }

  return src1x;
};

const getSrcValues = (useImageFlow, url, width, height) => {
  if (!useImageFlow) {
    return {
      src1x: url,
      placeHolder: defaultPlaceHolderImage,
    };
  }

  const srcs = getImageFlowSrcs(url, width, height);

  return {
    ...srcs,
    placeHolder: `${srcs.src1x}&zoom=0.1`,
  };
};

export const Image = ({
  width,
  height,
  key,
  className,
  src,
  alt,
  srcSet,
  loading,
}: Props) => {
  // @toDo: src can be an imageData object or a string
  const imgData = useMemo(
    () => (isImageData(src) ? src : toImageData(src, alt)),
    [src, alt]
  );
  const { url, source } = imgData;
  const altCurrent = alt || imgData.alt || '';
  const ratio = useDevicePixelRatio();

  const { src1x, src2x, src3x, srcSetValue, placeHolder } = useMemo(
    () => getSrcValues(source === IMAGE_SOURCE_INTERNAL, url, width, height),
    [url, width, height]
  );

  const [srcCurrent, setSrcCurrent] = useState(placeHolder);
  const [srcSetCurrent, setSrcSetCurrent] = useState(null);

  const imageToLoad = useMemo(
    () => selectImageToLoad(ratio, src1x, src2x, src3x),
    [ratio, src1x]
  );

  useEffect(() => {
    const img = new window.Image();
    img.src = imageToLoad;
    img.onload = () => {
      setSrcCurrent(src1x);
      setSrcSetCurrent(srcSet || srcSetValue);
    };

    return () => {
      img.src = '';
    };
  }, [imageToLoad, src1x, srcSet, srcSetValue]);

  return (
    <>
      <img
        src={srcCurrent}
        srcSet={srcSetCurrent}
        alt={altCurrent}
        key={key}
        className={className}
        loading={loading}
        width={width ? `${width}px` : null}
        height={height ? `${height}px` : null}
      />
      <noscript>
        <img
          src={imageToLoad}
          alt={altCurrent}
          width={width ? `${width}px` : null}
          height={height ? `${height}px` : null}
        />
      </noscript>
    </>
  );
};