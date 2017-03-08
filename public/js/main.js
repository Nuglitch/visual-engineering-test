require.config({
  baseUrl: '/js',
  paths: {
    "jquery": "../libs/zepto/zepto.min"
  },
  shim: {
    "jquery": {
      exports: "Zepto"
    }
  }
});

require(['modules/shop-cart', 'modules/confirmation'], function(ShopCart, Confirmation) {
  'use strict';

  //options to pass to ShopCart and Confirmation such as class or id selectors
  //add options as needed, this are empty examples
  var shopCartOptions = {
    urls:{
        list: "/items"
      }
  },
    confirmationOptions = {};

  ShopCart.init(shopCartOptions);
  Confirmation.init(confirmationOptions);

});
