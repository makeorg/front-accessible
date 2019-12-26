import { bretagneQuestionSlugs } from './constants';

export const getBretagneQuestionSlug = (slug: string) =>
  bretagneQuestionSlugs.find(
    bretagneQuestionSlug => bretagneQuestionSlug === slug
  );
