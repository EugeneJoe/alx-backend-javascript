const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)
	    .then(() => {
		done();
	    });
    });
});
