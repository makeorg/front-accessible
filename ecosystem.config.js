module.exports = {
  apps: [{
    name: 'front-accessible',
    script: 'bin/start',
    exec_mode: 'cluster',
    instances: 8
  }]
};