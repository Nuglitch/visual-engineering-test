/**
 * This modules manages the logic for the shopping cart
 */
define(['jquery', 'templates/shop-cart-item-template'], function($, ShopCartItemTemplate) {
  'use strict';

  var _private = {
    options: {},

    /**
     * private method to displau UI and bind user action events
     */
    displayUI: function() {

      this.checkIfBuyButtonIsEnable(this.container.find('.list'), this.container.find('#buyButton'));

      //handle delete button click event
      this.container.find('.delete').on('click', function(e) {

        _private.deleteElementWithAnimationSlideRight($(this).closest('.shop-cart-item'));

      });

      //handle buy button click event
      this.container.find('#buyButton').on('click', function(e) {
        _private.container.hide();
        _private.options.showConfirmation();
      });
    },

    /**
     * Delete an html element after an slide right animation
     * @param element - Html element to be romved from the DOM
     */
    deleteElementWithAnimationSlideRight: function(element) {
      $(element).addClass('item-animation').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {

        //animation is done, we can delete the element from the DOM
        $(this).remove();

        _private.checkIfBuyButtonIsEnable(_private.container.find('.list'), _private.container.find('#buyButton'));
      });
    },

    /**
     * Check if a button is enable depending to the elements in the shop cart list and add the correspondig configuration to the button 
     * @param shopList - Html element that contains the shop cart list items
     * @param button - Html button to be configured enabled or not
     */
    checkIfBuyButtonIsEnable: function(shopList, button) {
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

    /**
     * Add or remove the attribute disabled to the button
     * @param button - Html button
     * @param enable - True for remove the attribute disabled or false for add it
     */
    addButtonEnabledProperty: function(button, enable) {
      if (enable) {
        $(button).removeAttr('disabled');
      } else {
        $(button).attr('disabled', 'disabled');
      }
    },

    /**
     * Get shop cart items from the server and call the template module for stuff the list
     * @param container - Html element that will be stuff with the shop cart items
     */
    addItemsFromServer: function(containerId) {
      $.ajax({
        url: _private.options.urls.list,
        type: 'GET',
        success: function(data) {

          var templateOptions = {
            data: data,
            containerId: containerId
          };

          ShopCartItemTemplate.init(templateOptions);
          _private.displayUI();
        },
        error: function(data) {
          alert('Error getting items');
        }
      });
    }
  };

  var _public = {

    /**
     * Initialization method for this module
     * @param options
     */
    init: function(options) {
      _private.options = options;

      _private.container = $('#' + options.containerId);

      _private.displayUI();
    },

    /**
     * Restuff the list with the shop cart items
     */
    reset: function() {
      _private.container.find('.list').remove();
      _private.addItemsFromServer(_private.options.containerId);
    },

    /**
     * Access to private methods for testing
     */
    apiTest: _private
  };

  return _public;

});
