#!/usr/local/bin/node
/** Do something wonderful
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     do-js
 *  @param      {stream} stdin  - Standard input
 *  @return     {stream} stdout - Standard output
 */ 'use strict';
var convar  = require('convar')
var doJs = require('../index.js')


function help() {
  var pkg = require('../package.json')
  console.error(pkg.description, '- v' + pkg.version)
  console.error('Usage:', pkg.name, '--param value')
  process.exit(1)
}

var param = convar('param')
if (!param) help()



// standard in template
var stdin   = require('get-stdin')

stdin(function (data) {
  if (data) {
    var result = doJs(data)
    console.log(JSON.stringify(result))
  }
})
