// @flow
import {
  buildDemographicsByType,
  setTitleByType,
  DEMOGRAPHIC_TYPES,
} from 'Client/helper/demographics';
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { SequenceIntroParagraphStyle } from '../style';
import { ExtraDataForm } from './Form';
import { ExtraDataDescriptionStyle } from './style';

export const ExtraDataCard = () => {
  const getRandomType = () => {
    const randomValue = Math.round(
      Math.random() * (DEMOGRAPHIC_TYPES.length - 1)
    );

    return DEMOGRAPHIC_TYPES[randomValue];
  };
  const [type, setType] = useState(null);
  const [demographics, setDemographics] = useState(null);

  // set a random type
  useState(() => {
    const newType = getRandomType();
    setType(newType);
    setDemographics(buildDemographicsByType(newType));
  }, [type]);

  return type ? (
    <>
      <SequenceIntroParagraphStyle>
        {setTitleByType(type)}
      </SequenceIntroParagraphStyle>
      <ExtraDataDescriptionStyle>
        {i18n.t('demographics_card.disclaimer')}
      </ExtraDataDescriptionStyle>
      <ExtraDataForm type={type} demographics={demographics} />
    </>
  ) : (
    <></>
  );
};
