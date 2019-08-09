const jsonServer = require('json-server');
const voteResponseData = require('../db/vote.json');

const proposalsRouter = jsonServer.create();

proposalsRouter.use('/:proposalId/vote', (req, res) => {
  const voteData = voteResponseData.find(
    vote => vote.voteKey === req.body.voteKey
  );

  res.send({ ...voteData, hasVoted: true });
});
proposalsRouter.use('/:proposalId/unvote', (req, res) => {
  const voteData = voteResponseData.find(
    vote => vote.voteKey === req.body.voteKey
  );

  res.send({ ...voteData, hasVoted: false });
});
proposalsRouter.use('/:proposalId/qualification', (req, res) => {
  const voteData = voteResponseData.find(
    vote => vote.voteKey === req.body.voteKey
  );

  const qualificationData = voteData.qualifications.find(
    qualification =>
      qualification.qualificationKey === req.body.qualificationKey
  );

  res.send({ ...qualificationData, hasQualified: true });
});

proposalsRouter.use('/:proposalId/unqualification', (req, res) => {
  const voteData = voteResponseData.find(
    vote => vote.voteKey === req.body.voteKey
  );

  const qualificationData = voteData.qualifications.find(
    qualification =>
      qualification.qualificationKey === req.body.qualificationKey
  );

  res.send({ ...qualificationData, hasQualified: false });
});

module.exports = proposalsRouter;
