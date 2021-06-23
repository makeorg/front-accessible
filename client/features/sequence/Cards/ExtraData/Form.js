// @flow
import { type DemographicsType } from 'Shared/types/card';
import { type StateRoot } from 'Shared/store/types';
import { BlackBorderButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { matchMobileDevice } from 'Shared/helpers/styled';
import { RadioDemographics } from './Radio';
import { ExtraDataFormStyle, SkipIconStyle, SubmitWrapperStyle } from './style';
import { SelectDemographics } from './Select';

type Props = {
  type: string,
  demographics: {
    ui: string,
    data: DemographicsType[],
  },
};

export const renderFormUI = (
  type: string,
  ui: string,
  data: DemographicsType[],
  currentValue: string,
  setCurrentValue: () => {}
) => {
  switch (ui) {
    case 'radio':
      return (
        <RadioDemographics
          type={type}
          data={data}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      );
    case 'select':
      return (
        <SelectDemographics
          data={data}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      );
    default:
      return null;
  }
};

export const ExtraDataForm = ({ type, demographics }: Props) => {
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const [currentValue, setCurrentValue] = useState(null);
  const { data, ui } = demographics;
  const FORM_NAME = `demographics_${type}`;
  const isSubmitDisabled = !currentValue || currentValue === 'skip';
  const isMobile = matchMobileDevice(device);

  return (
    <ExtraDataFormStyle id={FORM_NAME} name={FORM_NAME}>
      {renderFormUI(type, ui, data, currentValue, setCurrentValue)}
      <SubmitWrapperStyle>
        <BlackBorderButtonStyle>
          <SkipIconStyle aria-hidden focusable={false} />
          {i18n.t('demographics_card.skip')}
        </BlackBorderButtonStyle>
        <SubmitButton
          formName={FORM_NAME}
          label={
            isMobile
              ? i18n.t('demographics_card.submit_mobile')
              : i18n.t('demographics_card.submit_desktop')
          }
          disabled={isSubmitDisabled}
        />
      </SubmitWrapperStyle>
    </ExtraDataFormStyle>
  );
};
