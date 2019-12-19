export const endpoints = {
  postVote: {method: 'POST', url: '**/proposals/*/vote'},
  postTracking: {method: 'POST', url: '**/tracking/front'},
}
export const makeTrackingKey = 'MakeTracking';

// register requests by endpoint
export let xhrRequests = {};
xhrRequests[makeTrackingKey] = {};

// register asserts by endpoint
export let asserts = {};

then ('some make data header should be sent to {string}:', (endpoint, expectedHeaders) => {
  const assertCallback = () => expectedHeaders.hashes().forEach( expectedHeader => {
    const headerValue = xhrRequests[endpoint].request.headers[`x-make-${expectedHeader.name}`];
    expect(headerValue.trim(), `header x-make-${expectedHeader.name} on ${endpoint}`).to.equal(expectedHeader.value);
  });
  if (!asserts[endpoint]) {
    asserts[endpoint] = [];
  } 
  asserts[endpoint].push(assertCallback);
});

then('event {string} should be tracked by Make with parameters values:', (trackerName, expectedParameters) => {
  const assertCallback = () => expectedParameters.hashes().forEach( expectedParameter => {
    const body = xhrRequests[makeTrackingKey][trackerName].request.body;
    if (expectedParameter.name == 'eventType') {
      expect(
        body.eventType, 
        `tracking Make ${expectedParameter.name}`
      ).to.equal(expectedParameter.value);
    } else {
      expect(
        body.eventParameters[expectedParameter.name], 
        `tracking Make ${expectedParameter.name}`
      ).to.equal(expectedParameter.value);
    }
  });
  if (!asserts['postTracking']) {
    asserts['postTracking'] = [];
  } 
  asserts['postTracking'].push(assertCallback);
});

given('I monitor API {string} requests', (endpoint) => {  
  cy.server();
  const onRequest = (xhr) => {
    xhrRequests[endpoint] = xhr;
    if (xhr.request.body && xhr.request.body.eventName) {
      xhrRequests[makeTrackingKey][xhr.request.body.eventName] = xhr;
    }
  };
  cy.route({
    method: endpoints[endpoint].method, 
    url: endpoints[endpoint].url,
    onRequest: onRequest,
  }).as(endpoint);
});