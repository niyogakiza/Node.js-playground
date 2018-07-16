const expect = require("chai").expect;
const tools = require("./lib/tools");

describe("Tools", () => {
    describe("printName()", () => {
        it('should  print the last name first',  () => {
            let results = tools.printName({ first: "Alex", last: "Banks"});
            expect(results).to.equal("Banks, Alex")

        });
    });

    describe("loadWiki()", () => {
        it("Load Abraham Lincoln's wikipedia page", () => {
            tools.loadWiki({ first: "Abraham", last:"Lincoln"}, (html) => {
                expect(html).to.be.ok;
            })
        });
    });
});


