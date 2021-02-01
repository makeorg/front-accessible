// @flow
const GREAT_CAUSE = 'GREAT_CAUSE';

export const isGreatCause = (operationKind: string) =>
  operationKind === GREAT_CAUSE;

export const orderPartnersByWeight = (
  partner1: PartnerType,
  partner2: PartnerType
) => {
  if (partner1.weight === null && partner2.weight === null) {
    return 0;
  }
  if (partner2.weight === null) {
    return 1;
  }
  if (partner1.weight === null) {
    return -1;
  }

  return 0;
};
