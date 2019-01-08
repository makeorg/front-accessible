/* eslint consistent-return: 0 */

const fs = require('fs');
const path = require('path');
const { SERVER_DIR } = require('./paths');

export default function questionApi(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const { questionSlug } = req.params;

  fs.readFile(path.join(
    SERVER_DIR,
    `/staticData/operationsParams/${questionSlug}.json`
  ), 'utf8', (err, content) => {
    if (err) {
      return res.status(404).end();
    }
    return res.send(content);
  });
}
