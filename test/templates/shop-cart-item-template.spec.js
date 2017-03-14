define(['templates/shop-cart-item-template'], function (ShopCartItemTemplate) {
  'use strict';

  describe('ShopCartItemTemplate template Test', function () {

    var options = {};
    it('should have init method', function () {
      expect(ShopCartItemTemplate.init).toBeDefined();
    });

    it('should have create method', function () {
      expect(ShopCartItemTemplate.create).toBeDefined();
    });

    it('create method should call createAndDisplayTemplate method', function () {
      spyOn(ShopCartItemTemplate.apiTest, 'createAndDisplayTemplate');
      ShopCartItemTemplate.create();
      expect(ShopCartItemTemplate.apiTest.createAndDisplayTemplate).toHaveBeenCalled();
    });

    describe('should format a string number to EUR', function () {

      it('should have numberToEurFormat method', function () {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat).toBeDefined();
      });

      it('should format correctly a string with more than 3 digits', function () {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("12345")).toBe("123.45");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("1234")).toBe("12.34");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("123")).toBe("1.23");

        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(12345)).toBe("123.45");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(1234)).toBe("12.34");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(123)).toBe("1.23");
      });

      it('should format correctly a string with less than 3 digits', function () {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("12")).toBe("0.12");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("1")).toBe("0.01");

        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(12)).toBe("0.12");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(1)).toBe("0.01");
      });

      it('should return Undefined for a not valid input', function () {
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("")).toBe("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("12.34")).toBe("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(12.34)).toBe("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat("ab")).toBe("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(undefined)).toBe("Undefined");
        expect(ShopCartItemTemplate.apiTest.numberToEurFormat(null)).toBe("Undefined");
      });
    });
  });
});