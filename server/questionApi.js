/* eslint consistent-return: 0 */

const fs = require('fs');
const path = require('path');
const { SERVER_DIR } = require('./paths');

export default function questionApi(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (
    typeof req.query.country !== 'string'
    || !req.query.country.match(/^[A-Z]{2,3}$/)
    || !req.params.questionSlug.match(/^[A-Za-z0-9_-]*$/)
  ) {
    return res.status(400).end();
  }

  const query = {
    questionSlug: req.params.questionSlug,
    country: req.query.country
  };

  fs.readFile(path.join(
    SERVER_DIR,
    `/staticData/operationsParams/${query.questionSlug}_${query.country}.json`
  ), 'utf8', (err, content) => {
    if (err) {
      return res.status(404).end();
    }

    return res.send(content);
  });
}
