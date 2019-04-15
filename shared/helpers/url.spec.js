/* @flow */
import * as urlHelper from './url';

describe('Url Helper', () => {
  describe('localizeExternalLink', () => {
    it('return null if country is empty', () => {
      const link = urlHelper.localizeExternal('http://foo.bar', '', 'fr');

      expect(link).toEqual('');
    });

    it('return null if language is empty', () => {
      const link = urlHelper.localizeExternal('http://foo.bar', 'FR', '');

      expect(link).toEqual('');
    });

    it('return link with lowercase country and language', () => {
      const link = urlHelper.localizeExternal('http://foo.bar', 'FR', 'FR');
      expect(link).toBe('http://foo.bar/fr-fr');
    });
  });
});
