// @flow
import React, { useEffect, useState, useRef } from 'react';
import {
  type HistogramLegendType,
  type HistogramDataType,
} from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  HistogramWrapperStyle,
  HistogramListStyle,
  HistogramListItemStyle,
  HistogramBarContainerStyle,
  HistogramBarStyle,
  HistogramLabelStyle,
  HistogramPercentStyle,
  HistogramTitleStyle,
  HistogramLegendStyle,
  HistogramLegendLabelStyle,
  HistogramLegendColorsStyle,
} from './Styled';
import {
  getHistogramBarWidth,
  getHistogramBarMargin,
  getHistogramBarHeight,
} from './helpers';

type Props = {
  unit: string,
  name: string,
  legend: HistogramLegendType,
  forcedHigherValue?: number,
  data: HistogramDataType[],
};

export const Histogram = ({
  unit,
  name,
  legend,
  forcedHigherValue,
  data,
}: Props) => {
  const listRef = useRef(null);
  const [maxValue, setMaxValue] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemGap, setItemGap] = useState(0);
  const valuesArray = [];

  useEffect(() => {
    data.forEach(item => {
      const secondBarValue = item.bars.second;
      if (secondBarValue) {
        valuesArray.push(secondBarValue);
      }
      valuesArray.push(item.bars.first);
    });
    if (forcedHigherValue) {
      valuesArray.push(forcedHigherValue);
    }
    setMaxValue(Math.max(...valuesArray));
  }, [data]);

  useEffect(() => {
    if (listRef.current) {
      const itemWidthValue = getHistogramBarWidth(
        listRef.current.offsetWidth,
        data.length
      );
      setItemWidth(itemWidthValue);
    }

    const itemGapValue = getHistogramBarMargin(itemWidth, data.length);
    setItemGap(itemGapValue);
  }, [listRef.current]);

  return (
    <HistogramWrapperStyle>
      <HistogramTitleStyle>{name}</HistogramTitleStyle>
      <ScreenReaderItemStyle>
        <table>
          <caption>{name}</caption>
          <thead>
            <tr>
              <th />
              <th>
                {legend.dimensions.first}
                {` (${i18n.t('consultation.results.table.value_with_unit', {
                  unit: i18n.t(`consultation.results.table.${unit}`),
                })})`}
              </th>
              {legend.dimensions.second && (
                <th>
                  {legend.dimensions.second}
                  {` (${i18n.t('consultation.results.table.value_with_unit', {
                    unit: i18n.t(`consultation.results.table.${unit}`),
                  })})`}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{`${item.bars.first}%`}</td>
                {item.bars.second && <td>{`${item.bars.second}%`}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </ScreenReaderItemStyle>
      <HistogramLegendStyle aria-hidden>
        <h5>{legend.title}</h5>
        <HistogramLegendLabelStyle>
          {legend.dimensions.first}
          <HistogramLegendColorsStyle />
        </HistogramLegendLabelStyle>
        {legend.dimensions.second && (
          <HistogramLegendLabelStyle>
            {legend.dimensions.second}
            <HistogramLegendColorsStyle background={legend.dimensions.second} />
          </HistogramLegendLabelStyle>
        )}
      </HistogramLegendStyle>
      <HistogramListStyle ref={listRef} itemGap={itemGap} aria-hidden>
        {data.map(item => (
          <HistogramListItemStyle
            key={item.label}
            itemWidth={itemWidth}
            itemGap={itemGap}
          >
            <HistogramLabelStyle>{item.label}</HistogramLabelStyle>
            <HistogramBarContainerStyle>
              <HistogramBarStyle
                barWidth={item.bars.second ? 50 : 100}
                barHeight={getHistogramBarHeight(item.bars.first, maxValue)}
              >
                <HistogramPercentStyle>
                  {`${item.bars.first}%`}
                </HistogramPercentStyle>
              </HistogramBarStyle>
              {item.bars.second && (
                <HistogramBarStyle
                  background={item.bars.second}
                  barWidth={50}
                  barHeight={getHistogramBarHeight(item.bars.second, maxValue)}
                >
                  <HistogramPercentStyle>
                    {`${item.bars.second || 'undefined'}%`}
                  </HistogramPercentStyle>
                </HistogramBarStyle>
              )}
            </HistogramBarContainerStyle>
          </HistogramListItemStyle>
        ))}
      </HistogramListStyle>
    </HistogramWrapperStyle>
  );
};
