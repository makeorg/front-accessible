// @flow
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { MetaTags } from 'Client/app/MetaTags';
import { type match as TypeMatch } from 'react-router';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalSkipLinks } from 'Client/app/SkipLinks/Proposal';
import { SingleProposalCard } from 'Client/features/proposal/SingleProposalCard';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { SingleProposalSharingComponent } from 'Client/features/flipping/Sharing/SingleProposal';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SHARE_DISABLE } from 'Shared/constants/featureFlipping';

type Props = {
  match: TypeMatch,
};

const ProposalPage = (props: Props) => {
  const { match } = props;
  const { proposalId } = match.params;
  const [proposal, setProposal] = useState<?TypeProposal>(undefined);
  const [question, setQuestion] = useState<?TypeQuestion>(undefined);

  useEffect(() => {
    ProposalApiService.getProposal(proposalId).then(response => {
      setProposal(response);
    });
  }, []);

  useEffect(() => {
    if (proposal) {
      QuestionApiService.getDetail(proposal.question.questionId).then(
        response => {
          setQuestion(response);
        }
      );
    }
  }, [proposal]);

  if (!question) {
    return (
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
    question.activeFeatures
  );

  return (
    <ThemeProvider theme={question.theme}>
      <MiddlePageWrapperStyle>
        <ProposalSkipLinks />
        {proposal && (
          <>
            <MetaTags
              title={i18n.t('meta.proposal.title', {
                proposal: proposal.content,
              })}
              description={i18n.t('meta.proposal.description')}
              picture={question.wording.metas.picture}
            />
            <SingleProposalCard proposal={proposal} />
          </>
        )}

        {!isSharingDisabled && <SingleProposalSharingComponent />}
      </MiddlePageWrapperStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default ProposalPage; // eslint-disable-line import/no-default-export
