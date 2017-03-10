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

        }, time); 
      });
    },

    handleBuyButtonEnable: function() {

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
