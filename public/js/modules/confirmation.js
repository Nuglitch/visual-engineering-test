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

      //handle reset button click event
      _private.container.find('#resetButton').on('click', function(e) {
        _public.hide();
        _private.options.resetShopCart();
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
     * Show the container
     */
    show: function() {
      _private.container.show();
    },

    /**
     * Hide the container
     */
    hide: function() {
      _private.container.hide();
    }
  };

  return _public;

});
