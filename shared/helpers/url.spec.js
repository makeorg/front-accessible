/* @flow */
import * as urlHelper from './url';
const socialPathName = '/foo';
const socialMessage = 'bar';
const twitterHashtag = 'baz';


describe('Url Helper', () => {
  it('return null if country is empty', () => {
    const link = urlHelper.localizeLink('http://localhost', '', 'fr');

    expect(link).toBeNull();
  });

  it('return null if language is empty', () => {
    const link = urlHelper.localizeLink('http://localhost', 'FR', '');

    expect(link).toBeNull();
  });

  it('return link with lowercase country and language', () => {
    const link = urlHelper.localizeLink('http://localhost', 'FR', 'FR');
    expect(link).toBe('http://localhost/fr-fr');
  });

  it('return facebook sharing link with path params', () => {
    const link = urlHelper.facebookShareUrl(socialPathName);
    expect(link).toBe(`https://facebook.com/sharer/sharer.php?u=${
      encodeURIComponent(urlHelper.currentUrl(socialPathName))
    }`);
  });

  it('return twitter sharing link with path params', () => {
    const link = urlHelper.twitterShareUrl(socialPathName);
    expect(link).toBe(
      `https://twitter.com/intent/tweet/?text=&hashtags=&url=${
        encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }`
    );
  });

  it('return twitter sharing link with path & text params', () => {

    const link = urlHelper.twitterShareUrl(socialPathName, socialMessage);
    expect(link).toBe(
      `https://twitter.com/intent/tweet/?text=${
        encodeURIComponent(socialMessage)
      }&hashtags=&url=${
          encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }`
    );
  });

  it('return twitter sharing link with path, text & hashtag params', () => {

    const link = urlHelper.twitterShareUrl(socialPathName, socialMessage, twitterHashtag);
    expect(link).toBe(
      `https://twitter.com/intent/tweet/?text=${
        encodeURIComponent(socialMessage)
      }&hashtags=${
        encodeURIComponent(twitterHashtag)
      }&url=${
        encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }`
    );
  });

  it('return linkedin sharing link with path params', () => {
    const link = urlHelper.linkedinShareUrl(socialPathName);
    expect(link).toBe(
      `https://www.linkedin.com/shareArticle?mini=true&url=${
        encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }&title=&summary=&source=${
        encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }`
    );
  });

  it('return linkedin sharing link with path & message params', () => {
    const link = urlHelper.linkedinShareUrl(socialPathName, socialMessage);
    expect(link).toBe(
      `https://www.linkedin.com/shareArticle?mini=true&url=${
        encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }&title=${
        encodeURIComponent(socialMessage)
      }&summary=${
        encodeURIComponent(socialMessage)
      }&source=${
        encodeURIComponent(urlHelper.currentUrl(socialPathName))
      }`
    );
  });
});
