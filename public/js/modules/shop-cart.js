/**
 * This modules manages the logic for the shopping cart
 */
define(['jquery', 'templates/shop-cart-item-template'], function ($, ShopCartItemTemplate) {
  'use strict';

  var _private = {
    options: {},

    /**
     * private method to displau UI and bind user action events
     */
    displayUI: function () {

      this.checkIfBuyButtonIsEnable($('#shopCart .list'), $('#buyButton'));

      //handle delete button click event
      $('.delete').on('click', function (e) {

        _private.deleteElementWithAnimationSlideRight($(this).closest('.shop-cart-item'));

      });

      //handle buy button click event
      $('#buyButton').on('click', function (e) {
        $('#shopCart').hide();
        $('#shopCart .list').remove();
        _private.options.showConfirmation();
      });
    },

    deleteElementWithAnimationSlideRight: function (element) {
      $(element).addClass('item-animation').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function () {

        //animation is done, we can delete the element from the DOM
        $(this).remove();

        _private.checkIfBuyButtonIsEnable($('#shopCart .list'), $('#buyButton'));
      });
    },

    checkIfBuyButtonIsEnable: function (shopList, button) {
      //are there any item out of stock?
      var outOfStock = $(shopList).find('.out-of-stock').size();

      //are there any item in the shop list?
      var itemInCart = $(shopList).find('.shop-cart-item').size();

      if (outOfStock === 0 && itemInCart > 0) {
        this.addButtonEnabledProperty(button, true);
      } else {
        this.addButtonEnabledProperty(button, false);
      }
    },

    addButtonEnabledProperty: function (button, enable) {
      if (enable) {
        $(button).removeAttr('disabled');
      } else {
        $(button).attr('disabled', 'disabled');
      }
    },

    addItemsFromServer: function (container) {
      $.ajax({
        url: _private.options.urls.list,
        type: 'GET',
        success: function (data) {

          var templateOptions = {
            data: data,
            container: container
          };

          ShopCartItemTemplate.init(templateOptions);
          _private.displayUI();
        },
        error: function (data) {
          console.log('Error getting items');
        }
      });
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
    },

    reset: function () {
      _private.addItemsFromServer($("#shopCart"));
    },

    /**
     * Access to private methods for testing
     */
    apiTest: _private
  };

  return _public;

});
