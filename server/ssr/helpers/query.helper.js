export function queryParamIsDisable(query, param) {
  return query[param] === 'false';
}

export function disableExtraSlidesByQuery(sequenceExtraSlides, query) {
  const extraSlidesConfig = { ...sequenceExtraSlides };
  if (queryParamIsDisable(query, 'introCard')) delete extraSlidesConfig.introCard;
  if (queryParamIsDisable(query, 'pushProposal')) delete extraSlidesConfig.pushProposal;
  if (queryParamIsDisable(query, 'signUpCard')) delete extraSlidesConfig.signUpCard;
  return extraSlidesConfig;
}
