/* @flow */

import * as uuidHelper from './uuid';

describe('Uuid Helper', () => {
  it('generated uuid format', () => {
    const uuid = uuidHelper.uuid();
    expect(uuid).toMatch(
      /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
    );
  });

  it('generated uuid length', () => {
    const uuid = uuidHelper.uuid();
    expect(uuid.length).toBe(36);
  });
});
