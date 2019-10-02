import React, { useRef, useEffect } from 'react';
import { type TypePieChartData } from 'Shared/types/question';
import { useMobile } from 'Client/hooks/useMedia';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { i18n } from 'Shared/i18n';
import { WrapperStyle, PieChartCanvasStyle } from './Styled';
import { buildPieChart } from './Build';

type Props = {
  name: string,
  legend: string,
  data: TypePieChartData[],
};

export const PieChart = ({ name, legend, data }: Props) => {
  const canvasRef = useRef(null);
  const isMobile = useMobile();

  useEffect(() => {
    if (canvasRef) {
      buildPieChart(canvasRef, data, isMobile);
    }
  }, [canvasRef.current]);

  return (
    <WrapperStyle>
      <HiddenItemStyle>
        <p>{legend}</p>
        <table>
          <caption>{name}</caption>
          <thead>
            <th>{i18n.t('consultation.results.table.name')}</th>
            <th>
              {i18n.t('consultation.results.table.value_with_unit', {
                unit: i18n.t('consultation.results.table.percent'),
              })}
            </th>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{`${item.percent}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </HiddenItemStyle>
      <PieChartCanvasStyle aria-hidden ref={canvasRef} />
    </WrapperStyle>
  );
};
