import React, { useRef, useEffect } from 'react';
import { type PieChartDataType } from 'Shared/types/question';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { useSelector } from 'react-redux';
import { matchMobileDevice } from 'Shared/helpers/styled';
import {
  PieChartWrapperStyle,
  PieChartTitleStyle,
  PieChartCanvasStyle,
  PieChartLegendStyle,
} from './Styled';
import { buildPieChart } from './Build';

type Props = {
  unit: string,
  name: string,
  legend: string,
  data: PieChartDataType[],
};

export const PieChart = ({ unit, name, legend, data }: Props) => {
  const canvasRef = useRef(null);
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isMobile = matchMobileDevice(device);

  useEffect(() => {
    if (canvasRef) {
      buildPieChart(canvasRef, data, isMobile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasRef.current]);

  return (
    <PieChartWrapperStyle>
      <PieChartTitleStyle>{name}</PieChartTitleStyle>
      <ScreenReaderItemStyle>
        {legend && <p>{legend}</p>}
        <table>
          <caption>{name}</caption>
          <thead>
            <tr>
              <th>{i18n.t('consultation.results.table.name')}</th>
              <th>
                {i18n.t('consultation.results.table.value_with_unit', {
                  unit: i18n.t(`consultation.results.table.${unit}`),
                })}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.label}>
                <td>
                  {item.label}
                  {item.sublabel && ` ${item.sublabel}`}
                </td>
                <td>{`${item.percent}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScreenReaderItemStyle>
      <PieChartCanvasStyle aria-hidden ref={canvasRef} />
      {legend && (
        <PieChartLegendStyle aria-hidden>{legend}</PieChartLegendStyle>
      )}
    </PieChartWrapperStyle>
  );
};
