// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import {
  trackDisplaySequence,
  trackClickConsultation,
} from 'Shared/services/Tracking';
import { sequenceStart } from 'Shared/store/actions/sequence';
import { SequenceSkipLinks } from 'Client/app/SkipLinks/Sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { Sequence } from 'Client/features/sequence';
import { getConsultationLink, getResultsLink } from 'Shared/helpers/url';
import { Redirect } from 'react-router';
import { isInProgress } from 'Shared/helpers/date';
import { showVoteOnlyBanner } from 'Shared/store/actions/notification';
import { ThemeProvider } from 'styled-components';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import {
  SequencePageContentStyle,
  SequenceProposalFieldStyle,
  SequenceFooterStyle,
  SequenceFooterTitleStyle,
  SequenceFooterLinkStyle,
} from './style';

const SequencePage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const [isClosed, closeSequence] = useState(false);
  const dispatch = useDispatch();
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );
  const resultsLink = getResultsLink(
    question.country,
    question.language,
    question.slug
  );

  useEffect(() => {
    trackDisplaySequence();
    dispatch(sequenceStart(question.slug));
  }, []);

  const handleCloseSequence = () => {
    closeSequence(true);
  };

  const handleOpenSequence = () => {
    closeSequence(false);
  };

  if (!question) {
    return (
      <SequencePageContentStyle aria-busy>
        <Spinner />
      </SequencePageContentStyle>
    );
  }

  if (question.displayResults) {
    return <Redirect to={resultsLink} />;
  }

  if (!isInProgress(question)) {
    window.location = question.aboutUrl;
  }

  if (!question.canPropose) {
    dispatch(showVoteOnlyBanner());
  }

  return (
    <ThemeProvider theme={question.theme}>
      <MetaTags
        title={i18n.t('meta.sequence.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <SequenceSkipLinks canPropose={question.canPropose} />
      <SequencePageContentStyle>
        {question.canPropose && (
          <SequenceProposalFieldStyle
            id="proposal_submit"
            data-cy-container="proposal_submit"
          >
            <HiddenItemStyle as="h2">
              {i18n.t('consultation.proposal.title')}
            </HiddenItemStyle>
            <ProposalSubmit
              handleFocus={handleCloseSequence}
              canBeOpen={isClosed}
            />
          </SequenceProposalFieldStyle>
        )}
        <Sequence
          question={question}
          isClosed={isClosed}
          handleOpenSequence={handleOpenSequence}
        />
      </SequencePageContentStyle>
      <SequenceFooterStyle aria-labelledby="footer_title">
        <SequenceFooterTitleStyle id="footer_title">
          {question.question}
        </SequenceFooterTitleStyle>
        <SequenceFooterLinkStyle
          to={consultationLink}
          onClick={trackClickConsultation}
        >
          {i18n.t('footer_sequence.link')}
        </SequenceFooterLinkStyle>
      </SequenceFooterStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default SequencePage; // eslint-disable-line import/no-default-export
