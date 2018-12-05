/* @flow */

import * as helpers from './qualification';

describe('Qualification Helper', () => {
  it('getQualificationIndex with qualificationKey & proposalId', () => {
    const qualificationIndex = helpers.getQualificationIndex('foo',1234);
    expect(qualificationIndex).to.equal('foo_1234');
  });
});
