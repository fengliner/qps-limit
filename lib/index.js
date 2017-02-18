'use strict';

module.exports = function(options) {
  options.limit = options.limit || 1000;
  let reqTimes = [];
  return function(req, res, next) {
    let now = new Date();
    if (reqTimes.length < options.limit) {
      reqTimes.push(now);
      next()
    } else if (now.getTime() - reqTimes[0].getTime() < 1000) {
      res.send({
        code: 'qps_500',
        msg: 'The service is busy. Please try again later!'
      })
    } else {
      reqTimes.splice(0, 1);
      reqTimes.push(now);
      next();
    }
  }
}