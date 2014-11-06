var assert = chai.assert;
var expect = chai.expect;

describe('Test', function () {
    it("should hello", function () {
        assert(hello() === "Hello, World!");
    });

    it("should return sum", function () {
        assert(add(1, 2) === 3);
    });
});