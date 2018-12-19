const reactRender = require('../reactRender');

module.exports = function SequenceRoute(req, res) {
  let initialState = {};
  const { firstProposal } = req.query;
  if (firstProposal) {
    initialState = {
      sequence: {
        firstProposal
      }
    };
  }

  return reactRender(req, res, initialState);
};
