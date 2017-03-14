/**
 * This modules is and adapter between the aplication and the api
 */
define(['jquery'], function($) {
  'use strict';

  var _private = {
    options: {},

  };

  var _public = {

    /**
     * Initialization method for this module
     * @param options
     */
    init: function(options) {
      _private.options = options;
    },

    /**
     * Get shop cart items from the server and call the callback method
     * @param callback - Method to be called when the items are gotten
     */
    getShopCartItems: function(callback) {
      try {
        if (_private.options.urls.list === undefined) {
          throw "Error";
        }
        $.ajax({
          url: _private.options.urls.list,
          type: 'GET',
          success: function(data) {

            callback(data);

          },
          error: function(data) {
            alert('Error al obtener los elementos.');
          }
        });
      } catch (error) {
        alert('Error al obtener los elementos.');
      }
    }
  };

  return _public;

});
