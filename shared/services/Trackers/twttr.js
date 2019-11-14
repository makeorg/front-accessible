export const TWTTR_SCRIPT =
  '<script src="//platform.twitter.com/oct.js" type="text/javascript"></script>';
export const twttr = {
  initialized() {
    return window && window.twttr !== undefined;
  },

  track(eventName) {
    return window.twttr.conversion.trackPid(eventName, {
      tw_sale_amount: 0,
      tw_order_quantity: 0,
    });
  },
};
