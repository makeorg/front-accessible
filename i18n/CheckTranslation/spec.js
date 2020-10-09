import { analyseTranslation } from './index';

describe('compare translation objects ', () => {
  const transFr = {
    key1: 'value1',
    key2: {
      key3: 'value3',
      key4: 'value4',
      key5: {
        key6: 'value6',
        key7: 'value7',
      },
      key8: 'value8',
    },
  };

  const allTestData = [
    {
      trans: {},
      expected: {
        key1: '@@key1|fr:value1',
        key2: {
          key3: '@@key2.key3|fr:value3',
          key4: '@@key2.key4|fr:value4',
          key5: {
            key6: '@@key2.key5.key6|fr:value6',
            key7: '@@key2.key5.key7|fr:value7',
          },
          key8: '@@key2.key8|fr:value8',
        },
      },
    },
    {
      trans: {
        key1: 'initialValue1',
        key2: {
          key5: {
            key6: 'initialValue6',
            key7: 'initialValue7',
          },
        },
      },
      expected: {
        key1: 'initialValue1',
        key2: {
          key3: '@@key2.key3|fr:value3',
          key4: '@@key2.key4|fr:value4',
          key5: {
            key6: 'initialValue6',
            key7: 'initialValue7',
          },
          key8: '@@key2.key8|fr:value8',
        },
      },
    },
    {
      trans: {
        key1: 'initialValue1',
        key2: {
          key2: 'initialValue22',
          key3: 'initialValue3',
          key11: 'initialValue3',
          key5: {
            key12: 'initialeValue12',
            key13: 'initialeValue13',
          },
          key14: {
            key15: 'initialeValue15',
          },
        },
        key10: {
          key5: {
            key6: 'initialValue6',
            key7: 'initialValue7',
          },
        },
        key11: 'test',
      },
      expected: {
        key1: 'initialValue1',
        key2: {
          key3: 'initialValue3',
          key4: '@@key2.key4|fr:value4',
          key5: {
            key6: '@@key2.key5.key6|fr:value6',
            key7: '@@key2.key5.key7|fr:value7',
          },
          key8: '@@key2.key8|fr:value8',
        },
      },
    },
    {
      trans: {
        key2: 'initialValue2',
      },
      expected: {
        key1: '@@key1|fr:value1',
        key2: {
          key3: '@@key2.key3|fr:value3',
          key4: '@@key2.key4|fr:value4',
          key5: {
            key6: '@@key2.key5.key6|fr:value6',
            key7: '@@key2.key5.key7|fr:value7',
          },
          key8: '@@key2.key8|fr:value8',
        },
      },
    },
    {
      trans: {
        key2: {
          key10: {
            key3: '@@key2.key10.key3|fr:value3',
          },
        },
      },
      expected: {
        key1: '@@key1|fr:value1',
        key2: {
          key3: '@@key2.key3|fr:value3',
          key4: '@@key2.key4|fr:value4',
          key5: {
            key6: '@@key2.key5.key6|fr:value6',
            key7: '@@key2.key5.key7|fr:value7',
          },
          key8: '@@key2.key8|fr:value8',
        },
      },
    },
  ];

  it('check translations files', () => {
    allTestData.forEach(testData => {
      const result = analyseTranslation(
        { trans: testData.trans },
        { trans: transFr, language: 'fr' }
      );
      expect(result.fixedTrans).toEqual(testData.expected);
    });
  });
});
