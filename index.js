/** Do something wonderful
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     do-js
 */
 (function() {
  'use strict';
  function DoJsError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }

  /** Do js
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function doJsClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = 'Hello, world'
    return self
  }



  /** Do js
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function doJs(options) {
    return new doJsClass(options)
  }


  module.exports = doJs
})();
