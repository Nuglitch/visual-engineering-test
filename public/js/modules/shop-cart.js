/**
 * This modules manages the logic for the shopping cart
 */
define(['jquery'], function ($) {
  'use strict';

  var _private = {
    options: {},

    /**
     * private method to displau UI and bind user action events
     */
    displayUI: function () {

      //check if buy button is enable
      this.handleBuyButtonEnable();

      //handle delete button click event
      $('.delete').on('click', function (e) {

        //start animation
        $(this).closest('.shop-cart-item').addClass('item-animation').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function () {

          //animation is done, we can delete the element from the DOM
          $(this).remove();

          //check if buy button is enable
          _private.handleBuyButtonEnable();
        });

      });

      //handle buy button click event
      $('#buyButton').on('click', function (e) {
        $('#shopCart').hide();
        $('#confirmation').show();
      });
    },

    handleBuyButtonEnable: function () {
      //are there any item out of stock?
      var outOfStock = $('.out-of-stock').size();

      //are there any item in the cart list?
      var itemInCart = $('.shop-cart-item').size();

      if (outOfStock === 0 && itemInCart > 0) {
        this.buttonEnabled($('#buyButton'), true);
      } else {
        this.buttonEnabled($('#buyButton'), false);
      }
    },

    buttonEnabled: function (button, enable) {
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
    init: function (options) {
      _private.options = options;

      _private.displayUI();
    }
  };

  return _public;

});
