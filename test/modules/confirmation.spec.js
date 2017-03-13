define(['modules/confirmation'], function(Confirmation) {
  'use strict';

  describe('Confirmation module Test', function() {

    var options = {};
    it('should have init method', function() {
      expect(Confirmation.init).toBeDefined();
    });

    it('init method should call displayUI method', function () {
      spyOn(Confirmation.apiTest, 'displayUI');
      Confirmation.init(options);
       expect(Confirmation.apiTest.displayUI).toHaveBeenCalled();
    });

    it('should have show method', function() {
      expect(Confirmation.show).toBeDefined();
    });

    it('should have hide method', function() {
      expect(Confirmation.hide).toBeDefined();
    });

  });
});