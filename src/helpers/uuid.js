const s4 = () => (
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
);

const s8 = () => s4() + s4();
const s12 = () => s8() + s4();

export const uuid = () => (
  [s8(), s4(), s4(), s4(), s12()].join('-')
);
