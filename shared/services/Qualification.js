// @flow
import { QualificationApiService } from 'Shared/api/QualificationApiService';
import { type Qualification as TypeQualification } from 'Shared/types/qualification';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const qualify = async (
  proposalId: string,
  proposalKey: string,
  voteKey: string,
  qualificationKey: string,
  unexpectedError: () => void
): Promise<?TypeQualification> => {
  try {
    const response = await QualificationApiService.qualify(
      proposalId,
      proposalKey,
      voteKey,
      qualificationKey
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    unexpectedError();

    return null;
  }
};

const unqualify = async (
  proposalId: string,
  proposalKey: string,
  voteKey: string,
  qualificationKey: string,
  unexpectedError: () => void
): Promise<?TypeQualification> => {
  try {
    const response = await QualificationApiService.unqualify(
      proposalId,
      proposalKey,
      voteKey,
      qualificationKey
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    unexpectedError();

    return null;
  }
};

export const QualificationService = {
  qualify,
  unqualify,
};
