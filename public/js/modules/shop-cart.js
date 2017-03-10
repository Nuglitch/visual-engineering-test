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
        _private.moveRight(this.closest('.shop-cart-item'));
      });
    },

    moveRight: function(elem) {
      var leftPosition = parseInt($(elem).css('left')) + 20;
      $(elem).css('left', leftPosition + 'px');
      
      var animate
      if (leftPosition < window.innerWidth) {
        animate = setTimeout(_private.moveRight.bind(null, elem), 10); // call moveRight in 20msec
      } else {
        $(elem).remove();
        clearTimeout(animate);
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
