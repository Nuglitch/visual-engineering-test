/**
 * This modules manages the logic for the shopping cart
 */
define(['jquery', 'handlebars'], function ($, Handlebars) {
    'use strict';

    var _private = {
        options: {},

        htmlTemplate: "<div class='list'> \
                {{#each items}} \
                    <article class='shop-cart-item _item {{addClassOutOfStock outStock}}' data-id='{{id}}' data-image='{{image}}' data-name='{{name}}' data-price='{{price}}' data-quantity='{{quantity}}'> \
                        <span class='image'> \
                            <img src='{{image}}'> \
                        </span> \
                        <span class='description'> \
                            <span class='name'>{{name}}</span> \
                            <span class='price'>{{priceEur price}}</span> \
                            <span class='quantity'>{{quantity}} Unidades</span> \
                        </span> \
                        <span class='delete'> \
                            <img src='images/delete.svg'> \
                        </span> \
                    </article> \
                {{/each}}\
             </div>",

        /**
         * private method to displau UI and bind user action events
         */
        displayUI: function () {
            var doTemplate = Handlebars.compile(this.htmlTemplate);

            Handlebars.registerHelper('priceEur', function (price) {
                return price + " EUR";
            });

            Handlebars.registerHelper('addClassOutOfStock', function (outStock) {
                return (outStock)? "out-of-stock" : "";
            });

            var htmlData = doTemplate(this.options.data);
            this.options.container.prepend(htmlData);
            this.options.container.show();
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