// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import {
  MainResultsHeaderStyle,
  MainResultsTitleStyle,
  MainResultsTitleWrapperStyle,
} from './Styled';

type Props = {
  title: string,
  count: number,
  link: string,
};

export const MainResultsHeader = ({ title, count, link }: Props) => {
  return (
    <MainResultsHeaderStyle>
      <MainResultsTitleWrapperStyle>
        <MainResultsTitleStyle>{title}</MainResultsTitleStyle>
        {i18n.t('search.main_results.results', { count })}
      </MainResultsTitleWrapperStyle>
      {count > 4 && (
        <RedLinkStyle as={Link} to={link}>
          {i18n.t('search.main_results.view_all')}
        </RedLinkStyle>
      )}
    </MainResultsHeaderStyle>
  );
};
