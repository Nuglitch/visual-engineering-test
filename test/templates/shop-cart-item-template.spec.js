define(['templates/shop-cart-item-template'], function(ShopCartItemTemplate) {
  'use strict';

  describe('ShopCartItemTemplate template Test', function() {

    var options = {};
    it('should have init method', function() {

      expect(ShopCartItemTemplate.init).toBeDefined();
    });

  });

  describe('should format a string number to EUR', function() {

    it('should have numberToEurFormat method', function() {

      expect(ShopCartItemTemplate.apiTest.numberToEurFormat).toBeDefined();
    });

    it('should format correctly a string with more than 3 digits', function() {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("12345")).toMatch("123.45");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("1234")).toMatch("12.34");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("123")).toMatch("1.23");

        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(12345)).toMatch("123.45");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(1234)).toMatch("12.34");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(123)).toMatch("1.23");
    });

    it('should format correctly a string with less than 3 digits', function() {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("12")).toMatch("0.12");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("1")).toMatch("0.01");

        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(12)).toMatch("0.12");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(1)).toMatch("0.01");
    });

    it('should return Undefined for a not valid input', function() {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("")).toMatch("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("12.34")).toMatch("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(12.34)).toMatch("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("ab")).toMatch("Undefined");
    });

  });
});