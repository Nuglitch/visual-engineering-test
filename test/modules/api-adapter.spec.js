define(['modules/api-adapter'], function (ApiAdapter) {
    'use strict';

    describe('ApiAdapter module Test', function () {

        var options = {};
        it('should have init method', function () {
            expect(ApiAdapter.init).toBeDefined();
        });

        describe('getShopCartItems method', function () {

            var calls = {
                errorCallback: function () { }
            };

            it('should have getShopCartItems method', function () {
                expect(ApiAdapter.getShopCartItems).toBeDefined();
            });

            it('undefined options option should have to call errorCallback', function () {
                ApiAdapter.init();
                spyOn(calls, 'errorCallback');
                ApiAdapter.getShopCartItems(undefined, calls.errorCallback);
                expect(calls.errorCallback).toHaveBeenCalled();
            });

            it('undefined urls option should have to call errorCallback', function () {
                ApiAdapter.init(options);
                spyOn(calls, 'errorCallback');
                ApiAdapter.getShopCartItems(undefined, calls.errorCallback);
                expect(calls.errorCallback).toHaveBeenCalled();
            });

            it('undefined urls.items option should have to call errorCallback', function () {
                options = {
                    urls: {}
                };
                ApiAdapter.init(options);
                spyOn(calls, 'errorCallback');
                ApiAdapter.getShopCartItems(undefined, calls.errorCallback);
                expect(calls.errorCallback).toHaveBeenCalled();
            });
        });
    });
});