/* @flow */

import * as uuidHelper from './uuid';

describe('Uuid Helper', () => {
  it('generated uuid format', () => {
    const uuid = uuidHelper.uuid();
    expect(uuid).to.match(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/);
  });

  it('generated uuid length', () => {
    const uuid = uuidHelper.uuid();
    expect(uuid.length).to.equal(36);
  });
});
