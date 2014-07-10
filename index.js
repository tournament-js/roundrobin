module.exports = process.env.ROUNDROBIN_COV
  ? require('./lib-cov/robin.js')
  : require('./lib/robin.js');
