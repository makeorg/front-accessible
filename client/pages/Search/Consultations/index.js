// @flow
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type Location, type History } from 'history';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { getRouteSearch } from 'Shared/routes';
import { type QuestionType } from 'Shared/types/question';
import { QuestionService } from 'Shared/services/Question';
import { isInProgress } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import {
  trackDisplaySearchConsultationsResult,
  trackClickSearchReturn,
  trackClickHomepageConsultations,
} from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MetaTags } from 'Client/app/MetaTags';
import { SvgAngleArrowLeft, SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  BusinessConsultationsItemStyle,
  BusinessConsultationStyle,
  BusinessConsultationsItemLinkStyle,
  BusinessConsultationsItemStatusStyle,
  BusinessConsultationsItemArrowStyle,
  BusinessConsultationsItemBorderStyle,
} from 'Client/features/consultation/Business/Styled';
import { SearchResultsConsultationListStyle } from 'Client/features/search/Styled';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchBackStyle,
  SearchBackArrowStyle,
  SearchPageWrapperStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

type Props = {
  location: Location,
  history: History,
};

export const SearchConsultations = ({ location, history }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState<number>(0);
  const [consultations, setConsultations] = useState<QuestionType[]>([]);
  const isDesktop = useDesktop();

  const initQuestions = async () => {
    setIsLoading(true);
    const questions = await QuestionService.searchQuestions(
      country,
      language,
      term
    );
    if (questions) {
      const { results, total } = questions;
      setConsultations(results);
      setCount(total);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initQuestions();
  }, [term]);

  const handleReturn = () => {
    trackClickSearchReturn();
    history.push(getRouteSearch(country, language, term));
  };

  useEffect(() => {
    trackDisplaySearchConsultationsResult();
  }, []);
  return (
    <SearchPageWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.consultations', {
          term,
          count,
        })}
      />
      <SearchBackStyle onClick={() => handleReturn()}>
        <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
        {i18n.t('common.back')}
      </SearchBackStyle>
      <SearchPageTitleStyle>
        {isLoading
          ? i18n.t('search.titles.loading')
          : i18n.t('search.titles.operations', {
              term,
              count,
            })}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>
          <SearchResultsConsultationListStyle>
            {consultations.map(question => (
              <BusinessConsultationsItemStyle
                key={question.slug}
                backgroundColor={BasicColors.PureWhite}
              >
                <BusinessConsultationsItemLinkStyle
                  {...(isInProgress(question)
                    ? {
                        to: getConsultationLink(
                          country,
                          language,
                          question.slug
                        ),
                        as: Link,
                      }
                    : { href: question.aboutUrl, as: 'a' })}
                  onClick={() => trackClickHomepageConsultations()}
                >
                  <BusinessConsultationsItemBorderStyle
                    colorStart={question.theme.gradientStart}
                    colorEnd={question.theme.gradientEnd}
                  />
                  <BusinessConsultationStyle>
                    <BusinessConsultationsItemStatusStyle>
                      <ScreenReaderItemStyle>
                        {i18n.t('homepage.business_consultations.status')}
                      </ScreenReaderItemStyle>
                      {isInProgress(question)
                        ? i18n.t(
                            'homepage.business_consultations.question_inprogress'
                          )
                        : i18n.t(
                            'homepage.business_consultations.question_ended'
                          )}
                    </BusinessConsultationsItemStatusStyle>
                    {question.question}
                  </BusinessConsultationStyle>
                  <SvgAngleArrowRight
                    style={BusinessConsultationsItemArrowStyle}
                  />
                </BusinessConsultationsItemLinkStyle>
              </BusinessConsultationsItemStyle>
            ))}
          </SearchResultsConsultationListStyle>
        </SearchPageResultsStyle>
        {isDesktop && <SearchSidebar />}
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  );
};
