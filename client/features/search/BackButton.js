// @flow
import React from 'react';
import { type RouterHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { trackClickSearchReturn } from 'Shared/services/Tracking';
import { getRouteSearch } from 'Shared/routes';
import { i18n } from 'Shared/i18n';
import {
  SearchBackArrowStyle,
  SearchBackStyle,
} from 'Client/pages/Search/Styled';
import { SvgAngleArrowLeft } from 'Client/ui/Svg/elements';

type Props = {
  term: string,
  history: RouterHistory,
};
export const SearchBackButton = ({ term, history }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  const handleReturn = () => {
    trackClickSearchReturn();
    history.push(getRouteSearch(country, language, term));
  };

  return (
    <SearchBackStyle onClick={() => handleReturn()}>
      <SvgAngleArrowLeft aria-hidden style={SearchBackArrowStyle} />
      {i18n.t('common.back')}
    </SearchBackStyle>
  );
};
