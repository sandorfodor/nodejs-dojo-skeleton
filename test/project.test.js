const assert = require('assert');
const Project = require('../src/project');

describe('Project tests', function () {
  describe('#test()', function () {
    it('should return 1', function () {
      const project = new Project();
      assert.equal(1, project.test())
    })
  })
});
