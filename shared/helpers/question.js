// @flow
const GREAT_CAUSE = 'GREAT_CAUSE';
const PUBLIC_CONSULTATION = 'PUBLIC_CONSULTATION';
const PRIVATE_CONSULTATION = 'PRIVATE_CONSULTATION';

export const isGreatCause = (operationKind: string) =>
  operationKind === GREAT_CAUSE;

export const isPublicConsultation = (operationKind: string) =>
  operationKind === PUBLIC_CONSULTATION;

export const isPrivateConsultation = (operationKind: string) =>
  operationKind === PRIVATE_CONSULTATION;
