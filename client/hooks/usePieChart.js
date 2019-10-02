// @flow
import { type ElementRef as TypeElementRef, useEffect } from 'react';

type Props = {
  ref: TypeElementRef<any>,
  data: [{ label: string, percent: number, color: string }],
};
export const usePieChart = ({ ref, data }: Props) => {
  const canvas: HTMLCanvasElement = ref.current;
  const ctx = canvas.getContext('2d');

  useEffect(() => {
    canvas.width = 800;
    canvas.height = 600;
    const total = data.reduce((ttl, dataItem) => {
      return ttl + dataItem.percent;
    }, 0);
    let startAngle = 0;
    const radius = 100;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    data.map(dataItem => {
      // set the styles before beginPath
      ctx.fillStyle = dataItem.color;
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#333';
      ctx.beginPath();
      // console.log(total, house.troops, house.troops/total);
      // draw the pie wedges
      const endAngle = (dataItem.percent / total) * Math.PI * 2 + startAngle;
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle, false);
      ctx.lineTo(cx, cy);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      // add the labels
      ctx.beginPath();
      ctx.font = '20px Helvetica, Calibri';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rebeccapurple';
      // midpoint between the two angles
      // 1.5 * radius is the length of the Hypotenuse
      const theta = (startAngle + endAngle) / 2;
      const deltaY = Math.sin(theta) * 1.5 * radius;
      const deltaX = Math.cos(theta) * 1.5 * radius;
      /** *
        SOH  - sin(angle) = opposite / hypotenuse
                          = opposite / 1px
        CAH  - cos(angle) = adjacent / hypotenuse
                          = adjacent / 1px
        TOA
        
        ** */
      ctx.fillText(dataItem.label, deltaX + cx, deltaY + cy);
      ctx.closePath();

      startAngle = endAngle;
    });
  }, [ref.current]);
};
