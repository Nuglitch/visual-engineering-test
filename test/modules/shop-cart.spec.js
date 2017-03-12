define(['modules/shop-cart'], function(ShopCart) {
  'use strict';

  describe('ShopCart module Test', function() {

    var options = {};
    it('should have init method', function() {

      expect(ShopCart.init).toBeDefined();
    });

    it('buy button should be disabled if there are no items in the cart', function() {
      var list = document.createElement("div");

      var button = document.createElement("button");

      //check empty list
      ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
      expect(button.getAttribute("disabled")).toBeDefined();
      expect(button.getAttribute("disabled")).toMatch("disabled");

      var item = document.createElement("article");
      item.classList.add("shop-cart-item");
      list.appendChild(item);

      //check list with one item
      ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
      expect(button.getAttribute("disabled")).toBe(null);
    });

    it('buy button should be disabled if there is one or more items out of stock', function() {
      var list = document.createElement("div");

      var item = document.createElement("article");
      item.classList.add("shop-cart-item");
      list.appendChild(item);

      item = document.createElement("article");
      item.classList.add("shop-cart-item");
      list.appendChild(item);

      var button = document.createElement("button");

      //check list without elemts out of stock
      ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
      expect(button.getAttribute("disabled")).toBe(null);

      var itemOutStockA = document.createElement("article");
      itemOutStockA.classList.add("out-of-stock"); 
      list.appendChild(itemOutStockA); 

      //check list with one element out of stock
      ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
      expect(button.getAttribute("disabled")).toBeDefined();
      expect(button.getAttribute("disabled")).toMatch("disabled");

      var itemOutStockB = document.createElement("article");
      itemOutStockB.classList.add("out-of-stock"); 
      list.appendChild(itemOutStockB);
      button = document.createElement("button");

      //check list with two elements out of stock
      ShopCart.apiTest.checkIfBuyButtonIsEnable(list, button);
      expect(button.getAttribute("disabled")).toBeDefined();
      expect(button.getAttribute("disabled")).toMatch("disabled");
    });
  });
});