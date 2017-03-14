require.config({
  baseUrl: '/js',
  paths: {
    "jquery": "../libs/zepto/zepto.min",
    "handlebars": "../libs/handlebars/handlebars.min"
  },
  shim: {
    "jquery": {
      exports: "Zepto"
    }
  }
});

require(['modules/shop-cart', 'modules/confirmation', 'templates/shop-cart-item-template', 'modules/api-adapter'], function(ShopCart, Confirmation, ShopCartItemTemplate, ApiAdapter) {
  'use strict';

  //options to pass to ShopCart and Confirmation such as class or id selectors
  //add options as needed, this are empty examples
  var shopCartOptions = {
    showConfirmation: Confirmation.show,
    containerId: 'shopCart',
    getShopCartItems: ApiAdapter.getShopCartItems,
    createTemplate: ShopCartItemTemplate.create
  };

  ShopCart.init(shopCartOptions);

  var confirmationOptions = {
    resetShopCart: ShopCart.reset,
    containerId: 'confirmation'
  };

  Confirmation.init(confirmationOptions);

  var templateOptions = {
    containerId: 'shopCart'
  };

  ShopCartItemTemplate.init(templateOptions);

  var apiAdapterOptions = {
    urls: {
      list: "/items"
    }
  };

  ApiAdapter.init(apiAdapterOptions);

});
