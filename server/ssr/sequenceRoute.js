const reactRender = require('../reactRender');

module.exports = function SequenceRoute(req, res) {
  let sequenceState = {};
  const { firstProposal } = req.query;
  if (firstProposal) {
    sequenceState = {
      sequence: { firstProposal }
    };
  }

  return reactRender(req, res, sequenceState);
};
