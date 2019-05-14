// @flow
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';

export const getFirstOrganisation = (organisations: TypeOrganisation[]) => {
  const firstOrganisation: TypeOrganisation = organisations[0];
  return firstOrganisation;
};

export const getLastOrganisation = (organisations: TypeOrganisation[]) => {
  const lastOrganisation: TypeOrganisation =
    organisations[organisations.length - 1];
  return lastOrganisation;
};

export const getOtherOrganisations = (organisations: TypeOrganisation[]) => {
  const otherOrganisations: TypeOrganisation[] = organisations.slice(
    1,
    organisations.length - 1
  );
  return otherOrganisations;
};
