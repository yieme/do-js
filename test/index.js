var should = require('chai').should(),
    doJs = require('..')
;

describe('do-js', function() {
  it('should say hello', function(done) {
    var test = doJs()
    test.value.should.equal('Hello, world');
    done();
  });
});
