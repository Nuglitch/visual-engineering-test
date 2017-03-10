/**
 * This modules manages the logic for the shopping cart
 */
define(['jquery'], function($) {
  'use strict';

  var _private = {
    options: {},

    /**
     * private method to displau UI and bind user action events
     */
    displayUI: function() {

      this.handleBuyButtonEnable();

      $('.delete').on('click', function(e) {

        //get the shop cart item object
        var item = $(this).closest('.shop-cart-item');

        //start animation
        item.addClass('item-animation');

        var arr = item.css('animation-duration').split(".");

        //get decimal part if that exist
        var decimal = (arr[1] !== undefined)? parseInt(arr[1]) : 0;

        // join with decimal part
        var time = parseInt(arr[0]) * 1000 + decimal * 100;

        var animate = setTimeout(function() {

          //animation is done, we can delete the element from the DOM
          item.remove();
          clearTimeout(animate);
          
          //check if buy button is enable
          _private.handleBuyButtonEnable(); 

        }, time);
      });

      $('#buyButton').on('click', function(e) {
        alert('Hola');
      });
    },

    handleBuyButtonEnable: function() {
      var outOfStock = $('.out-of-stock').size();
      var itemInCart = $('.shop-cart-item').size();
      if (outOfStock === 0 && itemInCart > 0) {
        this.buttonEnabled($('#buyButton'), true);
      } else {
        this.buttonEnabled($('#buyButton'), false);
      }
    },

    buttonEnabled: function(button, enable) {
      if (enable) {
        button.removeAttr('disabled');
      } else {
        button.attr('disabled', 'disabled');
      }
    }
  };

  var _public = {

    /**
     * Initialization method for this module
     * @param options
     */
    init: function(options) {
      _private.options = options;

      _private.displayUI();
    }
  };

  return _public;

});
