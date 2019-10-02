import { type ElementRef as TypeElementRef } from 'react';
import { type TypePieChartData } from 'Shared/types/question';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

const offsetCanvasValue = (canvasValue: number, offset: number) => {
  const value = canvasValue / offset;
  return value;
};

export const buildPieChart = (
  ref: TypeElementRef<HTMLCanvasElement>,
  data: TypePieChartData[],
  isMobile: boolean
) => {
  const canvas: HTMLCanvasElement = ref.current;
  const ctx = canvas.getContext('2d');
  canvas.width = isMobile ? 300 : 400;
  canvas.height = isMobile ? 300 : 400;
  const total = data.reduce((ttl, item) => {
    return ttl + item.percent;
  }, 0);
  let startAngle = 0;
  const radius = isMobile ? 75 : 100;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const labelYOffset = 0.15;
  const sublabelYOffset = 0.25;
  const labelCy = canvas.height / (2 - labelYOffset);
  const sublabelCy = canvas.height / (2 - sublabelYOffset);

  data.map(item => {
    // define adjustLabel const
    const isTextAlignAjusted = item.adjustLabel && item.adjustLabel.textAlign;
    const hasASublabel = item.sublabel;
    const isXAxisAdjusted = item.adjustLabel && item.adjustLabel.xAxis;
    const isYAxisAdjusted = item.adjustLabel && item.adjustLabel.yAxis;
    const hidePercentLabel = item.adjustLabel && item.adjustLabel.hidePercent;

    // draw the pie wedges
    const endAngle = (item.percent / total) * Math.PI * 2 + startAngle;
    // midpoint between the two angles
    const theta = (startAngle + endAngle) / 2;

    // 1.5 * radius is the length of the Hypotenuses
    const deltaY = Math.sin(theta) * 1.5 * radius;
    const deltaX = Math.cos(theta) * 1.5 * radius;

    // set XAxis position
    const defaultDeltaX = deltaX + cx;
    const itemDeltaX = isXAxisAdjusted
      ? deltaX + offsetCanvasValue(canvas.width, item.adjustLabel.xAxis)
      : defaultDeltaX;

    // set yAxis position
    const percentDeltaY = isYAxisAdjusted
      ? deltaY + offsetCanvasValue(canvas.height, item.adjustLabel.yAxis)
      : deltaY + cy;
    const labelDeltaY = isYAxisAdjusted
      ? deltaY +
        offsetCanvasValue(canvas.height, item.adjustLabel.yAxis - labelYOffset)
      : deltaY + labelCy;
    const sublabelDeltaY = isYAxisAdjusted
      ? deltaY +
        offsetCanvasValue(
          canvas.height,
          item.adjustLabel.yAxis - sublabelYOffset
        )
      : deltaY + sublabelCy;

    // set the styles before beginPath
    ctx.fillStyle = item.color;
    ctx.beginPath();

    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle, false);
    ctx.lineTo(cx, cy);
    ctx.fill();
    ctx.closePath();

    // add the percent as label
    ctx.beginPath();
    ctx.font = isMobile
      ? `12px ${MakeFonts.CircularStandardBold}`
      : `16px ${MakeFonts.CircularStandardBold}`;
    ctx.textAlign = isTextAlignAjusted ? item.adjustLabel.textAlign : 'center';
    ctx.fillStyle = BasicColors.PureBlack;
    ctx.fillText(
      hidePercentLabel ? item.label : `${item.percent}%`,
      itemDeltaX,
      percentDeltaY
    );

    // add the label
    ctx.beginPath();
    ctx.font = isMobile
      ? `9px ${MakeFonts.CircularStandardBook}`
      : `12px ${MakeFonts.CircularStandardBook}`;
    ctx.textAlign = isTextAlignAjusted ? item.adjustLabel.textAlign : 'center';
    ctx.fillStyle = BasicColors.PureBlack;
    // use altCy to display the label under the percent
    ctx.fillText(hidePercentLabel ? '' : item.label, itemDeltaX, labelDeltaY);

    // add the sublabel if the element has one
    if (hasASublabel) {
      ctx.beginPath();
      ctx.font = isMobile
        ? `9px ${MakeFonts.CircularStandardBook}`
        : `12px ${MakeFonts.CircularStandardBook}`;
      ctx.textAlign = isTextAlignAjusted
        ? item.adjustLabel.textAlign
        : 'center';
      ctx.fillStyle = BasicColors.PureBlack;
      // use altCy to display the label under the percent
      ctx.fillText(item.sublabel, itemDeltaX, sublabelDeltaY);
    }

    ctx.closePath();

    startAngle = endAngle;
    return null;
  });
};
