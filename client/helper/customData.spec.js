import { generateCustomDataManager } from './customData';

describe('Custom data from query params', () => {
  let storage;
  const customData = generateCustomDataManager({
    set: value => {
      storage = value;
    },
    get: () => {
      return storage || [];
    },
  });

  it('Store custom data from query params : first time', async () => {
    const queryParams1 = {
      cs_key1: '   value1   ',
      key2: 'value2',
      cs_key3: 'value3',
      cs_key01: ['value4a', 'value4b'],
      cs_: 'value7',
      cs_key02: '   ',
    };

    customData.storeCustomDataFromQueryParams(queryParams1);
    expect(customData.getFormattedDataForHeader()).toBe(
      'key1=value1,key3=value3'
    );
  });

  it('Update custom data in store from new query params', async () => {
    const queryParams2 = {
      cs_key4: 'value5',
      key2: 'value2',
      key5: 'value5',
      cs_key3: 'value3b',
      key6: 'value6',
    };

    customData.storeCustomDataFromQueryParams(queryParams2);
    expect(customData.getFormattedDataForHeader()).toBe(
      'key1=value1,key3=value3b,key4=value5'
    );
  });
});
