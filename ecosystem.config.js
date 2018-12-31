module.exports = {
  apps: [{
    name: 'front-accessible',
    script: 'bin/start',
    exec_mode: 'cluster',
    instances: 8,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
