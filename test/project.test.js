var assert = require('assert')
var Project = require('../src/project')

describe('Project tests', function () {
  describe('#test()', function () {
    it('should return 1', function () {
      let project = new Project()
      assert.equal(1, project.test())
    })
  })
})
