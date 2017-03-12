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
      $('#resetButton').on('click', function (e) {
        _private.hide();
        _private.options.resetShopCart();
      });
    },

    hide: function () {
      $('#confirmation').hide();
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

    show: function () {
      $('#confirmation').show();
    }
  };

  return _public;

});
