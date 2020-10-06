/* @flow */
import { FRONT_URL } from 'Shared/constants/config';
import * as urlHelper from './url';

const pathName = '/fooPath';
const aboutUrl = 'https://foo.bar/baz';
const country = 'FR';
const questionSlug = 'fooQuestionSlug';
const proposalId = 'fooProposalId';
const proposalSlug = 'fooProposalSlug';

describe('Url Helper', () => {
  it('return relative current url', () => {
    const link = urlHelper.getRelativeCurrentUrl(pathName);

    expect(link).toEqual(FRONT_URL + pathName);
  });

  it('return about link with #partenaires anchor', () => {
    const link = urlHelper.getPartnerAnchor(aboutUrl);

    expect(link).toEqual(`${aboutUrl}#partenaires`);
  });

  it('return sequence link', () => {
    const link = urlHelper.getSequenceLink(country, questionSlug);

    expect(link).toEqual(`/${country}/consultation/${questionSlug}/selection`);
  });

  it('return consultation link', () => {
    const link = urlHelper.getConsultationLink(country, questionSlug);

    expect(link).toEqual(
      `/${country}/consultation/${questionSlug}/consultation`
    );
  });

  it('return action link', () => {
    const link = urlHelper.getActionLink(country, questionSlug);

    expect(link).toEqual(`/${country}/consultation/${questionSlug}/actions`);
  });

  it('return proposal link', () => {
    const link = urlHelper.getProposalLink(
      country,
      questionSlug,
      proposalId,
      proposalSlug
    );

    expect(link).toEqual(
      `/${country}/consultation/${questionSlug}/proposal/${proposalId}/${proposalSlug}`
    );
  });
});
