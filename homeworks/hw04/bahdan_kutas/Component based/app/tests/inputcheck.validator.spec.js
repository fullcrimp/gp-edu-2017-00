describe('inputcheckDirective', () => {
    

    angular.mock.module.sharedInjector();
    let suit = {};
    beforeEach(angular.mock.inject(($rootScope, $compile) => {
        
        suit.scope = $rootScope.$new();
        suit.element = '<input ng-model="value" input-check-validator >';
        suit.element = $compile(suit.element)(suit.scope);
        suit.scope.$digest();
    }));

    it('it should behave somehow...', () => {
    });
});
