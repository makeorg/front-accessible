// @flow
import React, { useRef } from 'react';
import { type TypeSliderParams } from 'Shared/types/views';
import { i18n } from 'Shared/i18n';
import { SvgArrowLeft, SvgArrowRight } from 'Client/ui/Svg/elements';
import { ChartType } from 'Client/ui/Data';
import { useSlider } from 'Client/hooks/useSlider';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  ResultsSliderStyle,
  ResultsSliderArrowsStyle,
  ResultsCounterStyle,
} from './Styled';

type Props = {
  data: any[],
  sliderName: string,
};

export const ResultsSlider = ({ data, sliderName }: Props) => {
  const sliderRef = useRef();
  const dataLength = data.length;
  const sliderParams: TypeSliderParams = {
    slidesToShow: 1,
    arrows: {
      prev: `.${sliderName}.glider-prev`,
      next: `.${sliderName}.glider-next`,
    },
    counterName: `.${sliderName}.glider-index`,
  };

  useSlider(sliderRef, sliderParams, dataLength > 0);

  return (
    <React.Fragment>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <div className={`${sliderName} glider-contain`}>
        <ResultsSliderStyle className={`${sliderName} glider`} ref={sliderRef}>
          <UnstyledListStyle className={`${sliderName} glider-track`}>
            {data.map((chart, index) => (
              <li key={chart.name} className={sliderName}>
                <ScreenReaderItemStyle>
                  {i18n.t('common.slider.index_count', {
                    index: index + 1,
                    total: dataLength,
                  })}
                </ScreenReaderItemStyle>
                <ChartType chart={chart} />
              </li>
            ))}
          </UnstyledListStyle>
        </ResultsSliderStyle>
        <ResultsSliderArrowsStyle
          className={`${sliderName} glider-prev`}
          aria-label={i18n.t('common.slider.previous')}
        >
          <SvgArrowLeft aria-hidden />
        </ResultsSliderArrowsStyle>
        <ResultsSliderArrowsStyle
          className={`${sliderName} glider-next`}
          aria-label={i18n.t('common.slider.next')}
        >
          <SvgArrowRight aria-hidden />
        </ResultsSliderArrowsStyle>
        <ResultsCounterStyle aria-hidden>
          <span className={`${sliderName} glider-index`}>1</span>
          {` / ${dataLength}`}
        </ResultsCounterStyle>
      </div>
    </React.Fragment>
  );
};
