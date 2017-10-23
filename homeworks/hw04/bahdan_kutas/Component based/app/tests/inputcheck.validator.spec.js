describe('inputcheckDirective', () => {
    

    angular.mock.module.sharedInjector();
    let suit = {};
    beforeEach(angular.mock.inject(($rootScope, $compile) => {
        
        suit.scope = $rootScope.$new();
        suit.element = '<input ng-model="value" input-check-validator >';
        suit.element = $compile(suit.element)(suit.scope);
        debugger;
        console.log('0', suit.scope);
        suit.scope.$digest();
    }));

    it('it should behave somehow...', () => {
        suit.scope
        // console.dir('2', suit.scope);
    });
    // it('should behave...', () => {
    //     expect(2+2).toBe(4);
    // });
});
