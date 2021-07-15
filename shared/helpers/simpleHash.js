export const simpleHash = str => {
  let hash = 0;
  [...str].forEach(char => {
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + char;
    // eslint-disable-next-line no-bitwise
    hash &= hash;
  });

  return new Uint32Array([hash])[0].toString(36);
};
