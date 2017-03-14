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
     * @param errorCallback- Method to be called when an error happens
     */
    getShopCartItems: function(callback, errorCallback) {
      try {
        if (_private.options.urls.list === undefined) {
          throw "No se ha especificado una url.";
        }
        $.ajax({
          url: _private.options.urls.list,
          type: 'GET',
          success: function(data) {

            callback(data);

          },
          error: function(data) {
            errorCallback('Error al obtener los elementos.');
          }
        });
      } catch (error) {
        errorCallback(error);
      }
    }
  };

  return _public;

});
