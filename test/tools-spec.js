const expect = require("chai").expect;
const tools = require("./lib/tools");
const nock = require("nock");

describe("Tools", () => {
    describe("printName()", () => {
        it('should  print the last name first',  () => {
            let results = tools.printName({ first: "Alex", last: "Banks"});
            expect(results).to.equal("Banks, Alex")

        });
    });

    describe("loadWiki()", () => {

        before(() => {
            nock('https://en.wikipedia.org')
                .get("/wiki/Abraham_Lincoln")
                .reply(200, 'Mock Abraham Lincoln Page');
        });

        it("Load Abraham Lincoln's wikipedia page", (done) => {
            tools.loadWiki({ first: "Abraham", last:"Lincoln"}, (html) => {
                expect(html).to.equal('Mock Abraham Lincoln Page');
                done();
            })
        });
    });
});


