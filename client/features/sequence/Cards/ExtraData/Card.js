// @flow
import {
  buildDemographicsByType,
  setTitleByType,
} from 'Client/helper/demographics';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SequenceIntroParagraphStyle } from '../style';
import { ExtraDataForm } from './Form';
import { ExtraDataDescriptionStyle } from './style';

export const ExtraDataCard = () => {
  // const [type, setType] = useState('region');
  // type can be 'age', 'gender' or 'region'
  const type = 'region';
  const demographics = buildDemographicsByType(type);

  return (
    <>
      <SequenceIntroParagraphStyle>
        {setTitleByType(type)}
      </SequenceIntroParagraphStyle>
      <ExtraDataDescriptionStyle>
        {i18n.t('demographics_card.disclaimer')}
      </ExtraDataDescriptionStyle>
      <ExtraDataForm type={type} demographics={demographics} />
    </>
  );
};
