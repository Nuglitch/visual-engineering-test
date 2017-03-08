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
