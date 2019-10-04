// @flow
import React, { useEffect, useState, useRef } from 'react';
import {
  type TypeHistogramLegend,
  type TypeHistogramData,
} from 'Shared/types/question';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { i18n } from 'Shared/i18n';
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

type Props = {
  unit: string,
  name: string,
  legend: TypeHistogramLegend,
  forcedHigherValue?: number,
  data: TypeHistogramData[],
};

const getBarHeight = (itemValue, maxValue) => {
  const value = (itemValue * 100) / maxValue;
  return Math.round(value);
};

const getBarWidth = (parentWidth, arrayLength) => {
  const value = parentWidth / arrayLength;
  const barWidth = (value * 100) / parentWidth;
  return Math.floor(barWidth);
};

const getBarMargin = (parentWidth, arrayLength) => {
  const value = parentWidth / arrayLength;
  return Math.floor(value / 1.75);
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
    data.map(item => {
      const secondBarValue = item.bars.second;
      if (secondBarValue) {
        valuesArray.push(secondBarValue);
      }
      return valuesArray.push(item.bars.first);
    });
    if (forcedHigherValue) {
      valuesArray.push(forcedHigherValue);
    }
    return setMaxValue(Math.max(...valuesArray));
  }, [data]);

  useEffect(() => {
    if (listRef.current) {
      const itemWidthValue = getBarWidth(
        listRef.current.offsetWidth,
        data.length
      );
      setItemWidth(itemWidthValue);
    }

    const itemGapValue = getBarMargin(itemWidth, data.length);
    setItemGap(itemGapValue);
  }, [listRef.current]);

  return (
    <HistogramWrapperStyle>
      <HistogramTitleStyle>{name}</HistogramTitleStyle>
      <HiddenItemStyle>
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
      </HiddenItemStyle>
      <HistogramLegendStyle aria-hidden>
        <h5>{legend.title}</h5>
        <HistogramLegendLabelStyle>
          {legend.dimensions.first}
          <HistogramLegendColorsStyle />
        </HistogramLegendLabelStyle>
        {legend.dimensions.second && (
          <HistogramLegendLabelStyle>
            {legend.dimensions.second}
            <HistogramLegendColorsStyle background={data[0].color} />
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
                barHeight={getBarHeight(item.bars.first, maxValue)}
              >
                <HistogramPercentStyle>
                  {`${item.bars.first}%`}
                </HistogramPercentStyle>
              </HistogramBarStyle>
              {item.bars.second && (
                <HistogramBarStyle
                  background={item.color}
                  barWidth={50}
                  barHeight={getBarHeight(item.bars.second, maxValue)}
                >
                  <HistogramPercentStyle>
                    {`${item.bars.second}%`}
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
