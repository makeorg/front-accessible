import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { isInProgress } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { HomepagePaddingContentStyle } from 'Client/pages/Home/Styled';
import {
  QuestionListTitleStyle,
  QuestionsListStyle,
  QuestionItemStyle,
  QuestionLinkStyle,
  QuestionStyle,
  QuestionStatusStyle,
  QuestionArrowStyle,
  QuestionBorderStyle,
} from './Styled';

export const QuestionsListComponent = props => {
  const { questions, country, language } = props;
  return (
    <HomepagePaddingContentStyle
      id="question_list"
      aria-labelledby="questions_title"
    >
      <QuestionListTitleStyle id="questions_title">
        {i18n.t('homepage.question_list.title')}
      </QuestionListTitleStyle>
      <QuestionsListStyle>
        {questions.map(question => (
          <QuestionItemStyle key={question.slug}>
            <QuestionLinkStyle
              {...(isInProgress(question.endDate)
                ? {
                    to: getConsultationLink(country, language, question.slug),
                  }
                : { href: question.aboutUrl, as: 'a' })}
            >
              <QuestionBorderStyle
                colorStart={question.theme.colorStart}
                colorEnd={question.theme.colorEnd}
              />
              <QuestionStyle>
                <QuestionStatusStyle>
                  {isInProgress(question.endDate)
                    ? i18n.t('homepage.question_list.question_inprogress')
                    : i18n.t('homepage.question_list.question_ended')}
                </QuestionStatusStyle>
                {question.title}
              </QuestionStyle>
              <SvgAngleArrowRight style={QuestionArrowStyle} />
            </QuestionLinkStyle>
          </QuestionItemStyle>
        ))}
      </QuestionsListStyle>
    </HomepagePaddingContentStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const QuestionsList = connect(mapStateToProps)(QuestionsListComponent);
