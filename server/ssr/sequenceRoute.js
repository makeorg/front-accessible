import { createInitialState } from 'Shared/store/initialState';
import { SequenceService } from 'Shared/api/SequenceService';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { isInProgress } from 'Shared/helpers/date';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

export const sequenceRoute = async (req, res) => {
  let routeState = {};

  try {
    const initialState = createInitialState();
    const { questionSlug } = req.params;
    const question: TypeQuestion = await getQuestion(questionSlug);

    if (!isInProgress(question.startDate, question.endDate)) {
      return res.redirect(question.aboutUrl);
    }

    const questionConfiguration: TypeQuestionConfiguration = await getQuestionConfiguration(
      questionSlug
    );
    if (question) {
      const { sequenceConfig } = question;
      question.sequenceConfig = disableExtraSlidesByQuery(
        sequenceConfig,
        req.query
      );
    }

    const { firstProposal } = req.query;

    routeState = {
      sequence: {
        ...initialState.sequence,
        questionSlug,
      },
      questions: {
        [questionSlug]: {
          question,
          questionConfiguration,
        },
      },
    };

    if (firstProposal) {
      routeState.sequence = {
        ...routeState.sequence,
        firstProposal,
      };
    }
  } catch (error) {
    logError(error);
    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
