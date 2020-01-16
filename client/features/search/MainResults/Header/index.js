// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import {
  MainResultsHeaderStyle,
  MainResultsTitleStyle,
  MainResultsTitleWrapperStyle,
  MainResultsHeaderContentStyle,
} from './Styled';

type Props = {
  title: string,
  count: number,
  link: string,
};

export const MainResultsHeader = ({ title, count, link }: Props) => {
  return (
    <MainResultsHeaderStyle>
      <MainResultsHeaderContentStyle>
        <MainResultsTitleWrapperStyle>
          <MainResultsTitleStyle as="span">{title}</MainResultsTitleStyle>
          {i18n.t('search.main_results.results', { count })}
        </MainResultsTitleWrapperStyle>
        {count > 4 && (
          <RedLinkRouterStyle to={link}>
            {i18n.t('search.main_results.view_all')}
          </RedLinkRouterStyle>
        )}
      </MainResultsHeaderContentStyle>
    </MainResultsHeaderStyle>
  );
};
