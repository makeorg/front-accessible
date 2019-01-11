/* @flow */

import * as urlHelper from './url';

describe('Url Helper', () => {
  it('return null if country is empty', () => {
    const link = urlHelper.localizeLink('http://localhost', '', 'fr');

    expect(link).to.be.null;
  });

  it('return null if language is empty', () => {
    const link = urlHelper.localizeLink('http://localhost', 'FR', '');

    expect(link).to.be.null;
  });

  it('return link with lowercase country and language', () => {
    const link = urlHelper.localizeLink('http://localhost', 'FR', 'FR');

    expect(link).to.equal('http://localhost/fr-fr');
  });

});
