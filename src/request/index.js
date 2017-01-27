/**
 * Make a request using node.
 *
 * @param   {string}  method
 * @param   {string}  url
 * @param   {string}  body
 * @param   {Object}  headers
 * @returns {Promise}
 */
module.exports = function request (method, url, body, headers) {
  return fetch(url, {
    body: body,
    method: method,
    headers: headers
  }).then(function (res) {
    return res.json()
  })
  .then(function (res) {
    return {
      status: 200,
      body: res
    }
  })
}
