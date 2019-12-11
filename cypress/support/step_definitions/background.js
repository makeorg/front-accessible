import { asserts, xhrRequests, makeTrackingKey } from './requests';

given('monitor api requests', () => {
  before(() => {
    asserts = [];
    xhrRequests = {};
    xhrRequests[makeTrackingKey] = {};
  })
  after(() => {
    const endpoints = Object.keys(asserts);
    endpoints.forEach((endpoint) => {
      cy.wait(`@${endpoint}`).then (() => {
        asserts[endpoint].forEach(callBack => callBack());
      });
    });
  });
})