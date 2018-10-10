const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');

module.exports = function reactRender(req, res) {
  fs.readFile(path.join(BUILD_DIR, 'index.html'), 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    res.send(htmlData);
  });
};
