define(['modules/shop-cart'], function(ShopCart) {
  'use strict';

  describe('ShopCart module Test', function() {

    var options = {};
    it('should have init method', function() {

      expect(ShopCart.init).toBeDefined();
    });

  });
});