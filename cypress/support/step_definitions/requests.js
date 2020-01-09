export const endpoints = {
  postVote: {method: 'POST', url: '**/proposals/*/vote'},
  postTracking: {method: 'POST', url: '**/tracking/front'},
}

// register requests by endpoint
export let xhrRequests = {list: {}};

// register tracking requests by tracking name
export let xhrTrackingRequests = {list: {}}

// register asserts by endpoint
export let asserts = {list: {}};

then ('some make data header should be sent to {string}:', (endpoint, expectedHeaders) => {
  const assertCallback = () => expectedHeaders.hashes().forEach( expectedHeader => {
    expect(xhrRequests.list).to.have.any.keys(endpoint);
    const headerValue = xhrRequests.list[endpoint].request.headers[`x-make-${expectedHeader.name}`];
    const expectedValue = expectedHeader.value === '' ? null : expectedHeader.value; 
    expect(headerValue ? headerValue.trim() : null, `header x-make-${expectedHeader.name} on ${endpoint}`).to.equal(expectedValue);
  });
  if (!asserts.list[endpoint]) {
    asserts.list[endpoint] = [];
  } 
  asserts.list[endpoint].push(assertCallback);
});
then('event {string} should not be tracked by Make', (trackerName) => {
  const assertCallback = () => expect(xhrTrackingRequests.list).to.not.have.any.keys(trackerName);
  if (!asserts.list['postTracking']) {
    asserts.list['postTracking'] = [];
  } 
  asserts.list['postTracking'].push(assertCallback);
});

then('event {string} should be tracked by Make with parameters values:', (trackerName, expectedParameters) => {
  const assertCallback = () => expectedParameters.hashes().forEach( expectedParameter => {
    expect(xhrTrackingRequests.list).to.have.any.keys(trackerName);
    const body = xhrTrackingRequests.list[trackerName].request.body || {};
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
  if (!asserts.list['postTracking']) {
    asserts.list['postTracking'] = [];
  } 
  asserts.list['postTracking'].push(assertCallback);
});

given('I monitor API {string} requests', (endpoint) => {  
  cy.server();
  const onRequest = (xhr) => {
    xhrRequests.list[endpoint] = xhr;
    if (xhr.request.body && xhr.request.body.eventName) {
      xhrTrackingRequests.list[xhr.request.body.eventName] = xhr;
    }
  };
  cy.route({
    method: endpoints[endpoint].method, 
    url: endpoints[endpoint].url,
    onRequest: onRequest,
  }).as(endpoint);
});

