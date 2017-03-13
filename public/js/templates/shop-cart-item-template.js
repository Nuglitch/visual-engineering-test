/**
 * This modules manages the logic for the shopping cart
 */
define(['jquery', 'handlebars'], function($, Handlebars) {
  'use strict';

  var _private = {
    options: {},

    htmlTemplate: "<div class='list'>" +
      "{{#each items}}" +
      "<article class='shop-cart-item _item {{addClassOutOfStock outStock}}' data-id='{{id}}' data-image='{{image}}' data-name='{{name}}' data-price='{{price}}' data-quantity='{{quantity}}'>" +
      "<span class='image'>" +
      "<img src='{{image}}'>" +
      "</span>" +
      "<span class='description'>" +
      "<span class='name'>{{name}}</span>" +
      "<span class='price'>{{priceEur price}}</span>" +
      "<span class='quantity'>{{addQuantityWithCorrectIndicator quantity}}</span>" +
      "</span>" +
      "<span class='delete'>" +
      "<img src='images/delete.svg'>" +
      "</span>" +
      "</article>" +
      "{{/each}}" +
      "</div>",

    /**
     * private method to displau UI and bind user action events
     */
    displayUI: function() {
      var doTemplate = Handlebars.compile(this.htmlTemplate);

      Handlebars.registerHelper('priceEur', function(price) {
        return _private.numberToEurFormat(price) + " EUR";
      });

      Handlebars.registerHelper('addClassOutOfStock', function(outStock) {
        return (outStock) ? "out-of-stock" : "";
      });

      Handlebars.registerHelper('addQuantityWithCorrectIndicator', function(quantity) {
        if (quantity == "1") {
          return quantity + " Unidad";
        }
        return quantity + " Unidades";
      });

      var htmlData = doTemplate(this.options.data);
      this.container.prepend(htmlData);
      this.container.show();
    },

    /**
     * Convert a number to a EUR coin standard nomenclature. Ex: 4321 -> 43.21
     * @param num - Number to convert
     */
    numberToEurFormat: function(num) {
      var isnum = /^\d+$/.test(num);
      if (!isnum) {
        return "Undefined";
      }

      //convert to string if num is not
      var numString = num + "";

      if (numString.length > 2) {
        var splitIndex = numString.length - 2;
        return numString.substring(0, splitIndex) + "." + numString.substring(splitIndex);
      } else if (numString.length === 2) {
        return "0." + numString;
      } else if (numString.length === 1) {
        return "0.0" + numString;
      } else {
        return "Undefined";
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

      _private.container = $('#' + options.containerId);

      _private.displayUI();
    },

    /**
     * Access to private methods for testing
     */
    apiTest: _private
  };

  return _public;

});
