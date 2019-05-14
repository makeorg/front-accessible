// @flow
import { type OrganisationStances as TypeOrganisationStances } from 'Shared/types/organisation';

export const getFirstOrganisation = (
  organisations: TypeOrganisationStances[]
) => {
  const firstOrganisation: TypeOrganisationStances = organisations[0];
  return firstOrganisation;
};

export const getLastOrganisation = (
  organisations: TypeOrganisationStances[]
) => {
  const lastOrganisation: TypeOrganisationStances =
    organisations[organisations.length - 1];
  return lastOrganisation;
};

export const getOtherOrganisations = (
  organisations: TypeOrganisationStances[]
) => {
  const otherOrganisations: TypeOrganisationStances[] = organisations.slice(
    1,
    organisations.length - 1
  );
  return otherOrganisations;
};
