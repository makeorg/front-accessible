/* eslint consistent-return: 0 */

const fs = require('fs');
const path = require('path');
const cache = require('memory-cache');
const { SERVER_DIR } = require('./paths');

export default function questionApi(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const { questionSlug } = req.params;
  const questionPath = path.join(
    SERVER_DIR,
    `/staticData/operationsParams/${questionSlug}.json`
  );

  const content = cache.get(questionPath);
  if (!content) {
    fs.readFile(path.join(questionPath), 'utf8', (err, result) => {
      if (err) {
        return res.status(404).end();
      }
      cache.put(questionPath, result);
      return res.send(result);
    });
  } else {
    return res.send(content);
  }
}
