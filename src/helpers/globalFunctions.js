var deepEqual = require('deep-equal')

export function compareSessionDetails(cachedSessionDetail, newSessionDetail) {
  deepEqual(cachedSessionDetail, newSessionDetail);
}
