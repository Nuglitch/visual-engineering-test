define(['modules/shop-cart'], function (ShopCart) {
  'use strict';

  describe('ShopCart module Test', function () {

    var options = {};
    it('should have init method', function () {
      expect(ShopCart.init).toBeDefined();
    });

    it('init method should call displayUI method', function () {
      spyOn(ShopCart.apiTest, 'displayUI');
      ShopCart.init(options);
       expect(ShopCart.apiTest.displayUI).toHaveBeenCalled();
    });

    it('should have checkIfBuyButtonIsEnable method', function () {
      expect(ShopCart.apiTest.checkIfBuyButtonIsEnable).toBeDefined();
    });

    describe('buy button should be disabled if there are no items in the cart', function () {
      var list = document.createElement("div");

      var button = document.createElement("button");

      it('check empty list', function () {
        ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
        expect(button.getAttribute("disabled")).toBeDefined();
        expect(button.getAttribute("disabled")).toBe("disabled");
      });

      it('check list with one item', function () {
        var item = document.createElement("article");
        item.classList.add("shop-cart-item");
        list.appendChild(item);

        ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
        expect(button.getAttribute("disabled")).toBe(null);
      });
    });

    describe('buy button should be disabled if there is one or more items out of stock', function () {
      var list = document.createElement("div");

      var item = document.createElement("article");
      item.classList.add("shop-cart-item");
      list.appendChild(item);

      item = document.createElement("article");
      item.classList.add("shop-cart-item");
      list.appendChild(item);

      var button = document.createElement("button");

      it('check list without elemts out of stock', function () {
        ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
        expect(button.getAttribute("disabled")).toBe(null);
      });

      it('check list with one element out of stock', function () {
        var itemOutStockA = document.createElement("article");
        itemOutStockA.classList.add("out-of-stock");
        list.appendChild(itemOutStockA);

        ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
        expect(button.getAttribute("disabled")).toBeDefined();
        expect(button.getAttribute("disabled")).toBe("disabled");
      });

      it('check list with two elements out of stock', function () {
        var itemOutStockB = document.createElement("article");
        itemOutStockB.classList.add("out-of-stock");
        list.appendChild(itemOutStockB);
        button = document.createElement("button");

        ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
        expect(button.getAttribute("disabled")).toBeDefined();
        expect(button.getAttribute("disabled")).toBe("disabled");
      });
    });

    it('should have displayUI method', function () {
      expect(ShopCart.apiTest.displayUI).toBeDefined();
    });

    it('should have deleteElementWithAnimationSlideRight method', function () {
      expect(ShopCart.apiTest.deleteElementWithAnimationSlideRight).toBeDefined();
    });

    it('should have addButtonEnabledProperty method', function () {
      expect(ShopCart.apiTest.addButtonEnabledProperty).toBeDefined();
    });

    it('should have createTemplate method', function () {
      expect(ShopCart.apiTest.createTemplate).toBeDefined();
    });

    it('should have reset method', function () {
      expect(ShopCart.reset).toBeDefined();
    });

  });
});