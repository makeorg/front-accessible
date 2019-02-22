export const twttr = {
  initialized() {
    return window && window.twttr !== undefined;
  },

  track(eventName) {
    return window.twttr.conversion.trackPid(eventName, {
      tw_sale_amount: 0,
      tw_order_quantity: 0,
    }); // eslint-disable-line no-undef
  },
};
