const path = require('path');
const cache = require('memory-cache');
const fs = require('fs');

const { SERVER_DIR } = require('../paths');

export function homeApi(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  const jsonPath = path.join(SERVER_DIR, 'staticData/', 'home.json');

  const content = cache.get(jsonPath);
  if (content) {
    return res.send(content);
  }

  try {
    const result = fs.readFileSync(path.join(jsonPath), 'utf8');
    cache.put(jsonPath, result);

    return res.send(result);
  } catch (error) {
    return res.status(404).end();
  }
}
