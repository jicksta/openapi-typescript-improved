const fs = require("fs");
const { OpenAPIFormat } = require("../dist/src/OpenAPIFormat");
const util = require("./util");
const { renderDefinition } = require("../dist/src/templates");

describe("Definition", function() {
  describe("specs using the kubernetes.json fixture", function() {

    let fixture;

    beforeEach(function() {
      // const k8s = JSON.parse(fs.readFileSync(fixturePath).toString());
      const k8s = util.loadExample("kubernetes.json");
      // console.log(k8s.definitions)
      fixture = new OpenAPIFormat(k8s)
    });

    it("has definitions", function() {
      console.log(fixture.definitions);
      const renderedDefinition = renderDefinition(fixture.definitions[0]);
      console.log(renderedDefinition);
      expect(renderedDefinition.length).toBeGreaterThan(0);
    });

  });
});