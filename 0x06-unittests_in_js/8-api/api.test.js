const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function() {
	request(options, (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(res.statusCode).to.equal(200);
	    }
	});
    });
    it("check correct content", function() {
	request(options, (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.equal("Welcome to the payment system");
	    }
	});
    });
});
