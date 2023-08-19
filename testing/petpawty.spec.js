const assert = require('assert');
const { petPawty } = require("../src/petPawty.js")
const chai = require('chai');

describe("petPawty function on codewars", function() {

    it("should return the proper message for a single dog", function() {
        assert.strictEqual(petPawty(["Buddy"]), "A proper party needs more than just Buddy!");
    });

    it("should return the proper message for no dogs", function() {
        assert.strictEqual(petPawty([]),"Aww man, no dogs?");
    });

    it("should return the proper message for invalid input", function() {
        assert.strictEqual(petPawty(false),"This is not a list of dogs.");
        assert.strictEqual(petPawty(7),"This is not a list of dogs.");
        assert.strictEqual(petPawty(true),"This is not a list of dogs.");
        assert.strictEqual(petPawty(''),"This is not a list of dogs.");
    });

    it("should return the proper message for less than five dogs", function() {
        assert.strictEqual(petPawty(["Max", "Bailey", "Buddy"]), "We need more than 3 dogs for a pawty!")
    });

    it("should return true for a party with 5 dogs", function () {
        chai.assert.isTrue(petPawty(["Luna", "Charlie", "Bailey", "Rocky", "Daisy"]));
    });

    it("should return true for a party with 25 dogs", function () {
        const dogs = Array.from({ length: 25 }, (_, index) => `Dog${index}`);
        chai.assert.isTrue(petPawty(dogs));
    });

    it("should return the proper message for more than 25 dogs", function() {
        const dogs = Array.from({ length: 26 }, (_, index) => `Dog${index}`);
        assert.strictEqual(petPawty(dogs), "Woah 26, that's a lot of dogs! Let's keep it reasonable.");
    });

});