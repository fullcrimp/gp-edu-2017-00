describe('Testing AngularJS', function() {
  describe('Testing MainController', function() {
    it('should initialize kek in the scope', function() {
      module('angularBestbuy');

      var scope = {};
      var ctrl;

      inject(function($controller) {
        ctrl = $controller('bestBuyController', {
          $scope: scope
        });
      });
      expect(scope.kek).toBeDefined();
      expect(scope.kek).toBe(true);
    });
  });
});
